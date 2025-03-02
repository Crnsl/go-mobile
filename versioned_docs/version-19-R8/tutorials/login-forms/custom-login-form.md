---
id: custom-login-form
title: Custom Login Form
---


This tutorial will show you how to:

- Create and use a [custom login form](../../project-definition/publishing.md#login-form). 
- Allow authenticated users to login by scanning a QRCode.

:::info

To complete this tutorial, you need a real mobile device (simulators do not simulate camera).

:::

*Scenario: You already have a website with authenticated users and you want them to login into their app just by scanning a QRCode with their device*

You can [**download this custom login form from the 4D go mobile gallery**](https://4d-go-mobile.github.io/gallery//#/type/form-login). 


## STEP 1. Getting started

In this tutorial, we're going to:

* Include a custom login form
* Add the ability for your app users to login just by scanning a QRCode

First download our Starter project, which contains a database file and ready to use webpages in the Webfolder folder:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomLoginForm/archive/main.zip">Starter project</a>
</div>

:::info

This project already includes a Users table with a Login and a Password for each authenticated user.

:::

## STEP 2. Include and use a custom login form

To use a custom login form, the first thing you'll need to do is creating a *YourDatabase.4dbase/Resources/Mobile/form/login* folder.

Download the Sign in With [QRCode login form](https://github.com/mesopelagique/form-login-SignInWithQRCode/archive/master.zip) and simply drop it in the login folder you've just created.

![login folder](img/login-folder.png)

In the [Publishing page](../../project-definition/publishing.md#authentication-option) of the project editor, click **Authentication** and select the **SignInWithQRCode** form. 

![authentication activation](img/authentication-custom.png)

## STEP 3. On Mobile app Authentication database method

In the Publishing page, click on the **Create...** button to create and open the `On Mobile app Authentication` database method for your project. This is how it should look to authenticated users :

```4d
var $0 : Object
var $1 : Object

var $request; $response : Object

$request:=$1  // Information provided by mobile application
$response:=New object  // Information returned to mobile application

$entity:=ds.User.query("login = :1"; $request.email)
If ($entity.length>0)
	$password:=$entity.first().password  // Get the password from the table
	
	If (Verify password hash($password; $request.parameters.token))
		// Comparison with what you receive in the request
		
		$response.success:=True
	Else 
		$response.success:=False
	End if 
Else 
	$response.success:=False
End if 

// Optional message to display on mobile App.
If ($response.success)
	$response.statusText:="You are successfully authenticated"
Else 
	$response.statusText:="Sorry, you are not authorized to use this application."
End if 

$0:=$response
```


## STEP 4. Project Methods

### Authentication method

Here we get the variable from the form and check if those values exist in the User table :

```4d
//Retrieve all the variables of the form
C_TEXT($1)
ARRAY TEXT($arrNames; 0)
ARRAY TEXT($arrVals; 0)

// Get the login and pswd variable from the authentication web page
WEB GET VARIABLES($arrNames; $arrVals)
$VLOGIN:=Find in array($arrNames; "VLOGIN")
$VPASS:=Find in array($arrNames; "VPASS")

// Shared variable creation to access to it in the code
Use (Storage)
	Storage.session:=New shared object("login"; ""; "password"; "")
End use 

// Search if the login / pswd exist and if the user can be authentified
$entity:=ds.User.query("login = :1 and password = :2"; $arrVals{$VLOGIN}; $arrVals{$VPASS})

// If the login / pswd exist the login / pswd are initialised in the share variable
If ($entity.length>0)
	Use (Storage.session)
		Storage.session.login:=$arrVals{$VLOGIN}
		Storage.session.password:=$arrVals{$VPASS}
		Storage.session.success:=True
	End use 
	
	// Redirection to the web page
	WEB SEND HTTP REDIRECT("/createQRCode.html")
	
Else 
	// Back to the home page
	Use (Storage.session)
		Storage.session.success:=False
	End use 
	WEB SEND HTTP REDIRECT("/")
End if 
```

### GenerateQRCODE method

Here we generate a *vqrCodeData* process variable which is a json including the user email and the encrypted password. These data  are going to be embedded in the QRCode.

```4d
// Use storage variable
$currentUserEmail:=Storage.session.login
$token:=Storage.session.password
$options:=New object("algorithm"; "bcrypt"; "cost"; 4)
$hash:=Generate password hash($token; $options)

// Process variable creation (json value with mail and encrypted pswd)
vqrCodeData:=JSON Stringify(New object("email"; $currentUserEmail; "token"; $hash))

// Redirection to the QRcode webpage
WEB SEND HTTP REDIRECT("/generatedQRCode.shtml")
```


## STEP 5. Website

For this tutorial, three html pages are already available into the WebFolder folder:

* The authentication page (index.html)
* The QRcode generation page (createQRCode.html)
* The final page the user will scan from his mobile device (generatedQRCode.shtml)

Let's have a focus on those three pages :

### index.html

Here, we just use a 4DACTION to post login and password to be used in the *Authentication Project Method* that we are going to see in step 4:

```html
  <form class="box" ACTION="/4DACTION/Authentication" METHOD=post>
  <h1>1. Login</h1>
  <input type="text" id="login" placeholder="Username" name=VLOGIN >
  <input type="password" id="login" placeholder="Password" name=VPASS>
  <input type="submit" name="" value="Login">
  </form>
```

### createQRCode.html

Here, we use call the *GenerateQRCODE Project Method* using a 4DACTION:

```html
<h1>2. GENERATE YOUR QRCODE</h1>
  	<div>
  		<p>Create your QRCode to authenticate clicking <a href="/4DACTION/GenerateQRCODE">Here</a></p>
	</div>
```

### generatedQRCode.shtml

In this last page, we use [4D tags](https://developer.4d.com/docs/Tags/tags.html) to get the *data* value:

```html
<h1>3. SCAN THE QRCODE FROM YOUR PHONE</h1>
  <div id="canvas"></div>

  <script type="text/javascript">
  
    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      data: '<!--#4DEVAL vqrCodeData-->',
      dotsOptions: {
        color: "#000",
        type: "square"
      },
      backgroundOptions: {
        color: "#FFFFFF",
      }
    });
    qrCode.append(document.getElementById("canvas"));
  </script>
  
```

## STEP 6. Get the entire scenario

### Login into your website home page

Enter **david@4D.com** in the Login field and **TEST** in the Password field in your website home page and click Login (Which is an existing record in the User table).

![Login form](img/login-form.png)


### Generate the QR Code

Click on the **HERE** button to generate the QR Code.

![Create QR Code](img/create-qr-code.png)

You will be redirected to the final QR Code page.

![Generated QR Code](img/generated-qr-code.png)

### Build your app on a real device

Install your mobile app from the project editor on a real device.

Then the custom login form will appear to allow you scanning the generated QRCode and login into your mobile app.

Here is the final result :

![Sign in with QR Code](img/sign-in-with-qr-code.gif)


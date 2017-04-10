# Standard ecommerce tracking for iMIS RiSE orders

This is a simple script for implementing standard ecommerce tracking using Google Tag Manager. 

The transaction information is scraped from the DOM on the order confirmation page which is then passed via the data layer from the code with the variable names below -

* transactionId (Required)
* transactionAffiliation (Optional)
* transactionTotal (Required)
* transactionShipping (Optional)
* transactionTax (Optional)
* transactionProducts (Optional)

The tag is triggered once the page (DOM) is fully loaded, with the built-in trigger type "DOM Ready".

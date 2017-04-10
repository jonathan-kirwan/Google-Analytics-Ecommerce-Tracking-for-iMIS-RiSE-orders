    $(document).ready(function () {
    	// DOM scraping to get values from cart

    	const transactionId = document.querySelector("[id*='OrderNumberValue']").innerHTML;
    	const transactionTotal = document.querySelector("[id*='OrderConfirmation_TxtTransTotalAmount']").innerHTML;
    	const transactionShipping = document.querySelector("[id*='OrderConfirmation_TxtShippingAmount']").innerHTML;
    	const transProductName = document.querySelector("[id*='OrderConfirmation_ItemGrid'] > td:nth-child(1)").innerHTML;
    	const transProductQuantity = document.querySelector("[id*='OrderConfirmation_ItemGrid'] > td:nth-child(2)").innerHTML;
    	const transProductPrice = document.querySelector("[id*='OrderConfirmation_ItemGrid'] > td:nth-child(3)").innerHTML;
    	const transProductSku = document.querySelector("[id*='OrderConfirmation_ItemGrid'] > td:nth-child(6)").innerHTML;

    	// Search transaction products. Add each project to an Object. Then add each Object in to an array

    	const mytable = document.querySelector("[id*='OrderConfirmation_ItemGrid'] tbody");
    	const mytablelength = document.querySelector("[id*='OrderConfirmation_ItemGrid'] tbody").rows.length;

    	const transactionProducts = []
    	const transactionNamesList = []

    	for (i = 0; i < mytablelength; i++) {
    		const transSku = mytable.rows[i].cells[5].innerHTML;
    		const transName = mytable.rows[i].cells[0].innerHTML;
    		const transPrice = mytable.rows[i].cells[2].innerHTML;
    		const transQuantity = mytable.rows[i].cells[1].innerHTML;

    		// transactionProducts.push(transactionName);

    		const transactionProduct = {
    			sku: transSku,
    			name: transName,
    			price: transPrice,
    			quantity: transQuantity
    		};
    		transactionProducts.push(transactionProduct);
    	}

    	window.dataLayer = window.dataLayer || []
    	dataLayer.push({
    		'transactionId': transactionId,
    		'transactionTotal': transactionTotal,
    		'transactionShipping': transactionShipping,
    		'transactionProducts': transactionProducts
    	});
    });
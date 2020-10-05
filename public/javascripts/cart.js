// on reload put data in cart from lacalStorage to id="cartCount" in header
$(window).load(function() {
    if (localStorage.clickcount>0){
        $("#static-item").css("display", "block");
        document.getElementById("cartCount").innerHTML = localStorage.clickcount;
        var obj = JSON.parse(localStorage.testObject);
        // document.getElementById("cartPrice").innerHTML = obj.price;
        // document.getElementById("cartName").innerHTML = obj.model;
        // $("#cartImg").attr("src",obj.imgsrc);
        // var myVariable = obj["three"];

        var rows = JSON.parse(localStorage.testObject);

        // forEach (var myArray as var k=>rows) {
        //     forEach (rows as var price=>rows[i].price) {
        //         var sumArray[price]+=rows[i].price;
        //     }
        // }
        // alert(sumArray);


        var html = "";
        // for (var i = 0; i < rows.length; i++) {
        for (var i = 0; i < localStorage.clickcount; i++) {
            html+="<li class='item' id='cart-item-40668505038'>";
            html+="<a href='/users/sneaker' title='NIKE - Air Force 1 - grey / 9.5' class='product-image'>";
            html+="<img id='cartImg' src='"+rows[i].imgsrc+"' alt='NIKE - Air Force 1 - grey / 9.5'>";
            html+="</a>";
            html+="<div class='product-details'>";
            html+="<p class='product-name'><a href='/users/sneaker' id='cartName'>"+rows[i].brand+" "+rows[i].model+"</a></p>";
            html+="<div class='cart-collateral'><span class='price'><span class='money' id='cartPrice' data-currency-usd='20000RWF' data-currency='USD'>"+rows[i].price+"</span></span> x 1</div>";
            html+="<a href='javascript:void(0)' onclick='removeToCart()' title='Remove This Item' class='btn-remove'><span class='zmdi zmdi-close'></span></a>";
            html+="</div>";
            html+="</li>";



        }
        html+="";
        $("#cartListDetails").html(html);

    }else{
        $("#static-item").css("display", "none");
    }
    
});

// on reload put data in cart from lacalStorage to id="cart-items" in cart.ejs
$(window).load(function() {
    if (localStorage.clickcount>0){
        $("#static-item").css("display", "block");
        document.getElementById("cartCount").innerHTML = localStorage.clickcount;
        var obj = JSON.parse(localStorage.testObject);
        // document.getElementById("cartPrice").innerHTML = obj.price;
        // document.getElementById("cartName").innerHTML = obj.model;
        // $("#cartImg").attr("src",obj.imgsrc);
        // var myVariable = obj["three"];

        var rows = JSON.parse(localStorage.testObject);

        // forEach (var myArray as var k=>rows) {
        //     forEach (rows as var price=>rows[i].price) {
        //         var sumArray[price]+=rows[i].price;
        //     }
        // }
        // alert(sumArray);


        var html = "";
        // for (var i = 0; i < rows.length; i++) {
        for (var i = 0; i < localStorage.clickcount; i++) {
            // html+="<li class='item' id='cart-item-40668505038'>";
            // html+="<a href='/users/sneaker' title='NIKE - Air Force 1 - grey / 9.5' class='product-image'>";
            // html+="<img id='cartImg' src='"+rows[i].imgsrc+"' alt='NIKE - Air Force 1 - grey / 9.5'>";
            // html+="</a>";
            // html+="<div class='product-details'>";
            // html+="<p class='product-name'><a href='/users/sneaker' id='cartName'>"+rows[i].brand+" "+rows[i].model+"</a></p>";
            // html+="<div class='cart-collateral'><span class='price'><span class='money' id='cartPrice' data-currency-usd='20000RWF' data-currency='USD'>"+rows[i].price+"</span></span> x 1</div>";
            // html+="<a href='javascript:void(0)' onclick='removeToCart()' title='Remove This Item' class='btn-remove'><span class='zmdi zmdi-close'></span></a>";
            // html+="</div>";
            // html+="</li>";

            html+="<div class='cart__row'>";
            html+="<div class='grid--full cart__row--table-large'>";
            html+="<div class='grid__item four-tenths'>";
            html+="<div class='grid cart_items'>";
            html+="<div class='grid__item wide--one-half post-large--one-half large--one-half'>";

            html+="<a href='/users/sneaker' class='cart__image'>";

            html+="<img src='/static/images/shoe9_0926fd04-01c0-4c74-b158-0fc24171828f_grandee471.jpg' alt='NIKE - Air Force 1 - grey / 9.5'>";
            html+="</a>";
            html+="</div>";
            html+="<div class='grid__item one-half cart-title'>";
            html+="<a href='/users/sneaker' class='h5'>NIKE - Air Force 1</a>";

            html+="<br>";
            html+="<small>grey / 9.5 / plastics</small>";

            html+="</div>";

            html+="</div>";
            html+="</div>";

            html+="<div class='grid__item six-tenths'>";
            html+="<div class='grid--full cart__row--table-large'>";

            html+="<div class='grid__item one-quarter'>";
            html+="<span class='h4 cart__large-labels'>Price</span>";
            html+="<span class='h5'><span class='money' data-currency-usd='20000RWF'>20000RWF</span></span>";
            html+="</div>";

            html+="<div class='grid__item one-quarter text-center'>";
            html+="<span class='h4 cart__large-labels'>Quantity</span>";

            html+="<div class='qty-box-set'>";
            html+="<input type='button' value='-' class='qtyminus1'>";
            html+="<input type='number' class='quantity-selector cart-number' name='updates[]' id='updates_40668505038' value='1' min='0'>";
            html+="<input type='button' value='+' class='qtyplus1'>";
            html+="</div>";
            html+="</div>";

            html+="<div class='grid__item one-quarter text-right'>";
            html+="<span class='h4 cart__large-labels'>Total</span>";
            html+="<span class='h5'>";

            html+="<span class='money' data-currency-usd='20000RWF'>20000RWF</span></span>";

            html+="</div>";
            html+="<div class='grid__item one-quarter text-center'>";
            html+="<span class='h4 cart__large-labels'>Remove</span>";

            html+="<a href='#' onclick='removeToCart()' class='cart__remove'>";
            html+="<span><i class='fa fa-trash'></i></span>";
            html+="</a>";
            html+="</div>";
            html+="</div>";
            html+="</div>";

            html+="</div>";
            html+="</div>";



        }
        html+="";
        $("#cart-items").html(html);

    }else{
        $("#static-item").css("display", "none");
    }
    
});



//    add to cart
function addToCart() {

    if(typeof(Storage) !== "undefined") {
        alert("Item has been add to your cart.");
        if (localStorage.clickcount) {
            localStorage.itemname = "Sneaker";
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            var unitBrand = jQuery('.product-vendor span').text();
            var unitModel = jQuery('.product_single_detail_section .product-single__title').text();
            var unitPrice = jQuery('.product-single .total-price span span.money').text();
            var unitRelease = jQuery('.product-date span').text();
            var unitSizes = $("input[name='option-1']:checked").val();
            var unitQuantity = parseInt(jQuery('#quantity').val());
            var unitImg = $('.product-photo-container a img#product-featured-image').attr('src');
            var testObject = { 'brand': unitBrand, 'model': unitModel, 'price': unitPrice, 'release': unitRelease, 'sizes': unitSizes, 'quantity': unitQuantity, 'imgsrc': unitImg };

            var localobj = JSON.parse(localStorage.testObject);
            // if (localobj.indexOf('[') >= 0) {
            //     alert('[' + " is a philosopher.");
            // } else {
            //     alert('[' + " is NOT a philosopher.");
            // }
            // localobj = localobj.replace('[[', '[');
            // localobj = localobj.replace(']', '');
            var newArrayData=[];
            newArrayData.push(localobj);
            newArrayData.push(testObject);
            // var newdata = JSON.stringify(newArrayData);
            // alert(newdata);
            // var newobj = testObject.push(obj);
            // obj[obj.length] = testObject;
            // Put the object into storage
            // localStorage.setItem('testObject', JSON.stringify(testObject));
            // localStorage.setItem('testObject', JSON.stringify(newobj));
            localStorage.setItem('testObject', JSON.stringify(newArrayData));

            // remove special characters 

            var localTestObject = localStorage.testObject;
            localTestObject = localTestObject.replace('}],{','},{');
            // localTestObject = localTestObject.replace(']','');

            localStorage.testObject = localTestObject;
            if(localStorage.testObject.includes("}],{")){
                localTestObject = localTestObject.replace('}],{','},{');
                localStorage.testObject = localTestObject;
            }

            if(localStorage.testObject.includes("[[{")){
                localTestObject = localTestObject.replace('[[{','[{');
                localStorage.testObject = localTestObject;
            }

            if(!localStorage.testObject.includes("[")) {
                localTestObject = localTestObject.replace('{','[{');
                localStorage.testObject = localTestObject;
            }

            // var localobjT = JSON.parse(localStorage.testObject);
            // var newArrayDataT=[];
            // newArrayDataT.push(localobjT);
            // newArrayDataT.push(testObject);
            // localStorage.setItem('testObject', JSON.stringify(newArrayDataT));



            // var strSp1 "[";
            // var strSp2 "]";

            // var localTestObject1 = localStorage.testObject;

            // var lastTestObject = strSp1.concat(localTestObject1, strSp2);

            // localStorage.testObject = lastTestObject;

            // var mystring = "crt/r2002_2";
            // mystring = mystring.replace('/r','/');

            // End of removing special characters 

            var rows = JSON.parse(localStorage.testObject);
            var html = "";
            // for (var i = 0; i < rows.length; i++) {
            for (var i = 0; i < localStorage.clickcount; i++) {
                html+="<li class='item' id='cart-item-40668505038'>";
                html+="<a href='/users/sneaker' title='NIKE - Air Force 1 - grey / 9.5' class='product-image'>";
                html+="<img id='cartImg' src='"+rows[i].imgsrc+"' alt='NIKE - Air Force 1 - grey / 9.5'>";
                html+="</a>";
                html+="<div class='product-details'>";
                html+="<p class='product-name'><a href='/users/sneaker' id='cartName'>"+rows[i].brand+" "+rows[i].model+"</a></p>";
                html+="<div class='cart-collateral'><span class='price'><span class='money' id='cartPrice' data-currency-usd='$675.00' data-currency='USD'>"+rows[i].price+"</span></span> x 1</div>";
                html+="<a href='javascript:void(0)' onclick='removeToCart()' title='Remove This Item' class='btn-remove'><span class='zmdi zmdi-close'></span></a>";
                html+="</div>";
                html+="</li>";



            }
            html+="";
            $("#cartListDetails").html(html);
            // var names = [];
            // names[0] = prompt("New member name?");
            // localStorage.setItem("names", JSON.stringify(names));
            location.href = '/users/sneaker';
        } else {
            localStorage.clickcount = 1;
            localStorage.itemname = "Sneaker";
            var unitBrand = jQuery('.product-vendor span').text();
            var unitModel = jQuery('.product_single_detail_section .product-single__title').text();
            var unitPrice = jQuery('.product-single .total-price span span.money').text();
            var unitRelease = jQuery('.product-date span').text();
            var unitSizes = $("input[name='option-1']:checked").val();
            var unitQuantity = parseInt(jQuery('#quantity').val());
            var unitImg = $('.product-photo-container a img#product-featured-image').attr('src');
            var testObject = { 'brand': unitBrand, 'model': unitModel, 'price': unitPrice, 'release': unitRelease, 'sizes': unitSizes, 'quantity': unitQuantity, 'imgsrc': unitImg };

            // Put the object into storage
            localStorage.setItem('testObject', JSON.stringify(testObject));
            var obj = JSON.parse(localStorage.testObject);
            document.getElementById("cartPrice").innerHTML = obj.price;
            document.getElementById("cartName").innerHTML = obj.model;
            $("#cartImg").attr("src",obj.imgsrc);
            // location.href = '/users/sneaker';
        }
        document.getElementById("cartCount").innerHTML = localStorage.clickcount;
        location.href = '/users/sneaker';
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

//    remove to cart
function removeToCart() {

    if(typeof(Storage) !== "undefined") {
        alert("Item has been removed to your cart.");
        if (localStorage.clickcount) {
            localStorage.itemname = "Sneaker";
            localStorage.clickcount = Number(localStorage.clickcount)-1;
            var rows = JSON.parse(localStorage.testObject);
            var html = "";
            // for (var i = 0; i < rows.length; i++) {
            for (var i = 0; i < localStorage.clickcount; i++) {
                html+="<li class='item' id='cart-item-40668505038'>";
                html+="<a href='/users/sneaker' title='NIKE - Air Force 1 - grey / 9.5' class='product-image'>";
                html+="<img id='cartImg' src='"+rows[i].imgsrc+"' alt='NIKE - Air Force 1 - grey / 9.5'>";
                html+="</a>";
                html+="<div class='product-details'>";
                html+="<p class='product-name'><a href='/users/sneaker' id='cartName'>"+rows[i].brand+" "+rows[i].model+"</a></p>";
                html+="<div class='cart-collateral'><span class='price'><span class='money' id='cartPrice' data-currency-usd='$675.00' data-currency='USD'>"+rows[i].price+"</span></span> x 1</div>";
                html+="<a href='javascript:void(0)' onclick='removeToCart()' title='Remove This Item' class='btn-remove'><span class='zmdi zmdi-close'></span></a>";
                html+="</div>";
                html+="</li>";



            }
            html+="";
            $("#cartListDetails").html(html);
        } else {
            localStorage.clickcount = 1;
            localStorage.itemname = "Sneaker";
        }
        document.getElementById("cartCount").innerHTML = localStorage.clickcount;
        location.href = '/users/sneaker';
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}


//    cart Quantity
$('.qtyplus1').click(function(e) {
    e.preventDefault();
    var currentVal = parseInt($(this).parent().find('input[name="updates[]"]').val());
    if (!isNaN(currentVal)) {
        $(this).parent().find('input[name="updates[]"]').val(currentVal + 1);
    } else {
        $(this).parent().find('input[name="updates[]"]').val(1);
    }
});

$(".qtyminus1").click(function(e) {

    e.preventDefault();
    var currentVal = parseInt($(this).parent().find('input[name="updates[]"]').val());
    if (!isNaN(currentVal) && currentVal > 1) {
        $(this).parent().find('input[name="updates[]"]').val(currentVal - 1);
    } else {
        $(this).parent().find('input[name="updates[]"]').val(1);
    }
});
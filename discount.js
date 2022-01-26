const precioNormal = document.getElementById("ProductPrice");
const porcentajeDescuento = document.getElementById("ProductDiscount");
const total = document.getElementById("ProductTotal");


function descuento(){
    var totalprice = precioNormal.value - precioNormal.value*porcentajeDescuento.value/100 ;
    return total.innerHTML= totalprice.toFixed(2) + "$";
}


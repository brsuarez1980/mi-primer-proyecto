dineroCofla = prompt("Cuanto dinero tienes Cofla?");
dineroROberto = prompt("Cuánto dinero tienes Roberto?");
dineroPedro = prompt("Cuánto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, comprate el helado de agua");
    alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla, comprate el helado de crema");
    alert("y te sobran" + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, comprate el helado marca heladix");
    alert("y te sobran" + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, comprate el helado marca heladovich");
    alert("y te sobran" + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, comprate el helado marca helardo");
    alert("y te sobran" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("Cofla, comprate el helado con confites o el pote de 1/4kg");
    alert("y te sobran" + (dineroCofla - 2.9));
}

else {
    alert("Lo siento Cofla, sos pobre, no te alcanza para nada");
}

if (dineroROberto >= 0.6 && dineroROberto < 1) {
    alert("Robert, comprate el helado de agua")
}

else if (dineroROberto >= 1 && dineroROberto < 1.6) {
    alert("Robert, comprate el helado de crema")
}

else if (dineroROberto >= 1.6 && dineroROberto < 1.7) {
    alert("Robert, comprate el helado marca heladix")
}

else if (dineroROberto >= 1.7 && dineroROberto < 1.8) {
    alert("Robert, comprate el helado marca heladovich")
}

else if (dineroROberto >= 1.8 && dineroROberto < 2.9) {
    alert("Robert, comprate el helado marca helardo")
}

else if (dineroROberto >= 2.9) {
    alert("Robert, comprate el helado con confites o el pote de 1/4kg");
}

else {
    alert("Lo siento Robert, sos pobre, no te alcanza para nada");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, comprate el helado de agua")
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, comprate el helado de crema")
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, comprate el helado marca heladix")
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, comprate el helado marca heladovich")
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, comprate el helado marca helardo")
}

else if (dineroPedro >= 2.9) {
    alert("Pedro, comprate el helado con confites o el pote de 1/4kg");
}

else {
    alert("Lo siento Pedro, sos pobre, no te alcanza para nada");
}
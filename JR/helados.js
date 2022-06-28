dineroCofla = prompt ("cuanto dinero tienes? COFLA");
dineroRoberto = prompt ("cuanto dinero tienes? ROBERTO");
dineroPedro = prompt ("cuanto dinero tienes? PEDRO");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla>= 0.6 && dineroCofla <1){

        altert("COFLA: helado de agua");
        alert("sobra " + (dineroCofla - 0.6));

}
 else if (dineroCofla >=1 && dineroCofla < 1.6){

        alert("COFLA: helado de crema");
        alert("sobra " + (dineroCofla - 1));
 }

 else if (dineroCofla >=1.6 && dineroCofla < 1.7){

    alert("COFLA: helado Heladix");
    alert("sobra " + (dineroCofla - 1.6) );
}

else if (dineroCofla >=1.7 && dineroCofla < 1.8){

    alert("COFLA: helado de Heladovich");
    alert("sobra " + (dineroCofla - 1.7) );
}

else if (dineroCofla >=1.8 && dineroCofla < 2.9){

    alert("COFLA: helado de Helardo");
    alert("sobra " + (dineroCofla - 1.8));
}

else if (dineroCofla >=2.9){

    alert("COFLA: pote de helado 1/4 Kg o potecito de helado con dulces");
    alert("sobra " + (dineroCofla - 2.9));
}

else{

    alert("jajajajaja pobre");

}


if (dineroRoberto>= 0.6 && dineroRoberto <1){

    altert("ROBERTO: helado de agua");
    alert("sobra " + (dineroRoberto - 0.6));

}
else if (dineroRoberto >=1 && dineroRoberto < 1.6){

    alert("ROBERTO: helado de crema");
alert("sobra " + (dineroRoberto - 1 ));
}

else if (dineroRoberto >=1.6 && dineroRoberto < 1.7){

alert("ROBERTO: helado Heladix");
alert("sobra " + (dineroRoberto - 1.6));
}

else if (dineroRoberto >=1.7 && dineroRoberto < 1.8){

alert("ROBERTO: helado de Heladovich");
alert("sobra " + (dineroRoberto - 1.7));
}

else if (dineroRoberto >=1.8 && dineroRoberto < 2.9){

alert("ROBERTO: helado de Helardo");
alert("sobra " + (dineroRoberto - 1.8));
}

else if (dineroRoberto >=2.9){

alert("ROBERTO: pote de helado 1/4 Kg o potecito de helado con dulces");
alert("sobra " + (dineroRoberto - 2.9) );
}

else{

alert("jajajajaja pobre");

}

if (dineroPedro>= 0.6 && dineroPedro <1){

    altert("PEDRO: helado de agua");
alert("sobra " + (dineroPedro - 0.6) );

}
else if (dineroPedro >=1 && dineroPedro < 1.6){

    alert("PEDRO: helado de crema");
alert("sobra " + (dineroPedro - 1) );

}

else if (dineroPedro >=1.6 && dineroPedro < 1.7){

alert("PEDRO: helado Heladix");
alert("sobra " + (dineroPedro - 1.6) );

}

else if (dineroPedro >=1.7 && dineroPedro < 1.8){

alert("PEDRO: helado de Heladovich");
alert("sobra " + (dineroPedro - 1.7) );

}

else if (dineroPedro >=1.8 && dineroPedro < 2.9){

alert("PEDRO: helado de Helardo");
alert("sobra " + (dineroPedro - 2.9) );

}

else if (dineroPedro >=2.9){

alert("PEDRO: pote de helado 1/4 Kg o potecito de helado con dulces");

}

else{

alert("jajajajaja pobre");

}
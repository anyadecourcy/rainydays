<section class="bestgrid">
    <div class="best-sellers">
      <h2><strong>BEST SELLERS</strong></h2>
      <div class="bestgridone">
      <img class="women_jacket" src="images/homepage_women.jpg" />
      <img class="men_jacket" src="images/homepage_men.jpg" />
      <button class="viewproductone"><a href="women.html">View product</a></button>
      <button class="viewproducttwo"><a href="men.html">View product</a></button>
      </div>
  </section>

.bestgrid {
display: grid;
grid-template-columns: repeat(2, 2fr);
height: 620px;
background-color: rgba(181, 181, 181, 0.2);
margin-bottom: 50px;
}
.best-sellers {
grid-column: 1/3;
margin-left: 150px;
margin-right: 150px;
}

.best-sellers h2 {
display: flex;
justify-content: center;
margin-bottom: 0;
height: 50px;
}

.best-sellers button {
background-color: #ffffff;
opacity: 80%;
border: none;
cursor: pointer;
font-size: 15px;
width: 642px;
height: 41px;
}

.viewproductone a {
text-decoration: none;
color: #000;
padding-right: 271px;
padding-left: 271px;
padding-top: 10px;
padding-bottom: 10px;
}

.best-sellers button:hover {
background-color: #f17a13;
}

.viewproducttwo {
position: relative;
right: -156px;
top: 5px;
}

.viewproducttwo a {
text-decoration: none;
color: #000;
padding-right: 271px;
padding-left: 271px;
padding-top: 10px;
padding-bottom: 10px;
}

.viewproduct {
background-color: #ffffff;
opacity: 80%;
border: none;
font-size: 15px;
width: 442px;
height: 41px;
}

.bestjackets img {
display: flex;
flex-direction: column;
position: relative;
top: 90px;
margin-left: 100px;
margin-right: 100px;
justify-content: center;
justify-content: space-around;
}

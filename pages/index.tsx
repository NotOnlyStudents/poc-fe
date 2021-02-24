import Head from 'next/head'
import Link from 'next/link'
// import Date from '../components/date'
import Layout, { siteTitle } from 'components/layout'
import "isomorphic-unfetch";
import { privateEncrypt } from 'crypto';


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://localhost:3000/dev/products")
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}



/*
function getProducts()
{

  var x = getRequest().then(function(data){
    const main = document.querySelector('main');

    data=data.products;
    var div=document.getElementById("productsList");
    console.log(div);
    div.innerHTML="";
    for(var i = 0; i<data.length;i++)
    {
      var c = document.createElement('p');
      c.innerHTML = "<p> Product Name: "+data[i].name+" Product Price: "+data[i].price +"</p><br>";
      div.appendChild(c);
    }
  })

}**/


async function postData(url = '', data = {}) {
  url="http://localhost:3000/dev/product/2";
  data = {
    name : "Frigorifero",
    description : "Frigorifero Spazioso",
    price: 40,
  }
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


//DA FARE STATIC GENERATION
export default function Home({data}){
  postData();
  //console.log(data.products[0]);
 /* 
  var resp = {  
    userId: 1,
    id : 1,
    title: "",
    completed: true
};
resp.userId=22;
var x = "";**/
 //postData();

  return (  
  <Layout>
      <Head>
        <title>Chart - {siteTitle}</title>
      </Head>
      <Link href="/cart">
          <a>Shopping Cart</a>
        </Link>
</Layout>)
  } 

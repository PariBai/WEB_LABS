<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ol id="order">
      <li>Task1</li>
      <li>Task2</li>
      <li>Task3</li>
      <li>Task4</li>
    </ol>
    <hr />
    <p>Lorem ipsum b1</p>
    <p>Lorem ipsum b2</p>
    <p>Lorem ipsum b3</p>
    <div id="DivId">
      <p>Lorem ipsum D4</p>
      <p>Lorem ipsum D5</p>
      <p>Lorem ipsum D6</p>
      <span id="SpanId">
        <p>Lorem ipsum S7</p>
        <p>Lorem ipsum S8</p>
        <p>Lorem ipsum S9</p>
      </span>
    </div>

    <script>
      const myfirst = document.getElementById("order");
      console.log(myfirst.innerText);
      console.log(myfirst.innerHTML);
      myfirst.innerHTML = "<h1>Heading</h1>";
      const pgraph = document.getElementsByTagName("p");
      console.log(pgraph);
      pgraph[0].innerText = "Lorem1 Updated Version";
      const DivI = document.getElementById("DivId");
      console.log(DivI.querySelectorAll("#DivId > p"));
    </script>
  </body>
</html>

<html>
  <head>
  	<title>Genc-Activity5</title>
  </head>

  <body>
    <form method="post">
      <table>

        <tr>
          <td>From:&emsp; <input type="text" name="from"></td>
          <td>Currency: 
            <select name="from_currency">
              <option value="">Select currency</option>
              <option value="USD">USD</option>
              <option value="CAD">CAD</option>
              <option value="EUR">EUR</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>To:&emsp;&emsp;&nbsp;<input type="text" name="to"></td>
          <td>Currency: 
            <select name="to_currency">
              <option value="">Select currency</option>
              <option value="USD">USD</option>
              <option value="CAD">CAD</option>
              <option value="EUR">EUR</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colspan="2" align="right"><input type="submit" value="Convert"></td>
        </tr>
      </table>
    </form>

    <?php
    
      $from = $_POST['from'];
		  $from_currency = $_POST['from_currency'];
		  $to_currency = $_POST['to_currency'];

		  $exchange_rates = array(
		  	'USD' => array('CAD' => 1.36, 'EUR' => 0.91),
		  	'CAD' => array('USD' => 0.74, 'EUR' => 0.67),
		  	'EUR' => array('USD' => 1.10, 'CAD' => 1.47)
		  );

      // calculating the result
		  $exchange_rate = $exchange_rates[$from_currency][$to_currency];
		  $converted_amount = $from * $exchange_rate;

      // writing result to "to" space
      //document.getElementsByName('to')[0].value = converted_amount.toFixed(2);
      echo '<script>document.getElementsByName("from_currency")[0].value = "' . $from_currency . '";</script>';
      echo '<script>document.getElementsByName("to_currency")[0].value = "' . $to_currency . '";</script>';
      echo '<script>document.getElementsByName("from")[0].value = "' . number_format($from, 2) . '";</script>';
      echo '<script>document.getElementsByName("to")[0].value = "' . number_format($converted_amount, 2) . '";</script>';
      //echo '<script>document.getElementById("to").value = "' . number_format($converted_amount, 2) . '";</script>';
    
    ?>

    


  </body>
  

</html>

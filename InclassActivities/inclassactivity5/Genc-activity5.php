<!--Eray Genç-->
<!--19050111005-->

<html>
  <head>
  	<title>Genc-Activity5</title>
  </head>

  <body>

    <form method="post">

      <table>

        <tr>
          <td>From:&emsp; <input type="text" name="from"></td>
          <td>Currency:&emsp; 
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
          <td>Currency:&emsp;
            <select name="to_currency">
              <option value="">Select currency</option>
              <option value="USD">USD</option>
              <option value="CAD">CAD</option>
              <option value="EUR">EUR</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colspan="2" align="right"><input type="submit" value="Convert", name="submit"></td>
        </tr>

      </table>

    </form>

    <?php

      // check if submit button clicked
      if (isset($_POST['submit'])) {

        // taking values from sent by form
        $from = $_POST['from'];
		    $from_currency = $_POST['from_currency'];
		    $to_currency = $_POST['to_currency'];

        // firstly, checking blanks which are should be filled or selected
        if($from_currency == "" || $to_currency == "" || $from =="") {
          echo "<p>Please fill those blanks: 1-From textField, 2-From Currency comboBox, 3-To Currency comboBox.</p>";
          echo "<p>Then click Convert button.</p>";
        }
        else {
          // creating associative array by exchange rates
          $exchange_rates = array(
            'USD' => array('CAD' => 1.36, 'EUR' => 0.91, 'USD' => 1.0),
            'CAD' => array('USD' => 0.74, 'EUR' => 0.67, 'CAD' => 1.0),
            'EUR' => array('USD' => 1.10, 'CAD' => 1.47, 'EUR' => 1.0)
          );
  
          // calculating the result
          $exchange_rate = $exchange_rates[$from_currency][$to_currency];
          $converted_amount = $from * $exchange_rate;
  
          // writing result to "to" space and other data which are given before
          //document.getElementsByName('to')[0].value = converted_amount.toFixed(2);
          echo '<script>document.getElementsByName("from_currency")[0].value = "' . $from_currency . '";</script>'; 
          echo '<script>document.getElementsByName("to_currency")[0].value = "' . $to_currency . '";</script>';
          echo '<script>document.getElementsByName("from")[0].value = "' . number_format($from, 2) . '";</script>';
          echo '<script>document.getElementsByName("to")[0].value = "' . number_format($converted_amount, 2) . '";</script>';  // writing result to "to" textField 
          //echo '<script>document.getElementById("to").value = "' . number_format($converted_amount, 2) . '";</script>';
        }

		    
      
      }
      
    
    ?>

    


  </body>
  

</html>

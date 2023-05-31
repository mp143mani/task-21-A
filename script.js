

  

    // Function to fetch and display the kural
    async function fetchAndDisplayKural(kuralNumber) {
      try {
        const response = await fetch(`https://api-thirukkural.vercel.app/api?num=${kuralNumber}`);
        const kural = await response.json();

        const kuralline1 = kural.line1;
        const kuralline2 = kural.line2;
        const kuralline3 = kural.tam_exp;

        // Create HTML elements and display the kural
        var para = document.createElement("h1");
        para.innerHTML = kuralline1;
        document.getElementById("kuralDisplay").appendChild(para);

        var para2 = document.createElement("h1");
        para2.innerHTML = kuralline2;
        document.getElementById("kuralDisplay").appendChild(para2);

        var para3 = document.createElement("h");
        para3.innerHTML = kuralline3;
        document.getElementById("kuralDisplay").appendChild(para3);
      } catch (err) {
        console.log(err);
      }
    }

    // Handle form submission
    document.getElementById("searchForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
      const kuralNumber = parseInt(document.getElementById("kuralNumber").value);
      document.getElementById("kuralDisplay").innerHTML = ""; // Clear previous kural display
      fetchAndDisplayKural(kuralNumber);
    });
 

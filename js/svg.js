document.write(`
    <!DOCTYPE html>
    <html>
    
    <body>
    
    <!-- ============================================================ -->
    <!-- circle images -->
    <!-- ============================================================ -->
    
    <svg style="display: none">

      <symbol id="circle-6">
         <ellipse  cx="12" cy="50" rx="10" ry=48 stroke="black" stroke-width="4" />
      </symbol>  
      <symbol id="circle-8"> 
         <ellipse  cx="25" cy="50" rx="23" ry=48 stroke="black" stroke-width="4" />
       </symbol>
      <symbol id="circle-4"> 
         <circle cx="50" cy="50" r="48" stroke="black" stroke-width="4" />
       </symbol>
      <symbol id="circle-2"> 
         <rect x="48" y="50" width=150 height="48" style="stroke:black;stroke-width:4" />
         <circle cx="50" cy="50" r="48" stroke="black" stroke-width="4" />
       </symbol>
      <symbol id="circle-1"> 
         <rect x="48" y="50" width=350 height="48" style="stroke:black;stroke-width:4" />
         <circle cx="50" cy="50" r="48" stroke="black" stroke-width="4" />
       </symbol>
    </svg> 
    
    <!-- ============================================================ -->
    <!-- rectangle images -->
    <!-- ============================================================ -->
    <svg style="display: none">
      <symbol id="rect-6">
        <rect x="2" y="2" width=21 height="96" style="stroke:black;stroke-width:4" />
      </symbol>
      <symbol id="rect-8"> 
         <rect x="2" y="2" width=46 height="96" style="stroke:black;stroke-width:4" />
       </symbol>
      <symbol id="rect-4"> 
         <rect x="2" y="2" width=96 height="96" style="stroke:black;stroke-width:4" />
       </symbol>
      <symbol id="rect-2"> 
         <rect x="48" y="50" width=150 height="48" style="stroke:black;stroke-width:4" />
         <rect x="2" y="2" width=96 height="96" style="stroke:black;stroke-width:4" />
       </symbol>
      <symbol id="rect-1"> 
         <rect x="48" y="50" width=350 height="48" style="stroke:black;stroke-width:4" />
         <rect x="2" y="2" width=96 height="96" style="stroke:black;stroke-width:4" />
       </symbol>
    </svg> 
    
    <!-- ============================================================ -->
    <!-- triangle images -->
    <!-- ============================================================ -->
    <svg style="display: none">

      <symbol id="tri-6">
         <polygon points="2,98 11,4 23,98" style="stroke:black;stroke-width:4" />
      </symbol>
      <symbol id="tri-8"> 
          <polygon points="2,98 23,4 48,98" style="stroke:black;stroke-width:4" />
       </symbol>
      <symbol id="tri-4"> 
          <polygon points="2,98 48,4 98,98" style="stroke:black;stroke-width:4" />
       </symbol>
      <symbol id="tri-2"> 
         <rect x="48" y="50" width=150 height="48" style="stroke:black;stroke-width:4" />
          <polygon points="2,98 48,4 98,98" style="stroke:black;stroke-width:4" />
       </symbol>
      <symbol id="tri-1"> 
         <rect x="48" y="50" width=350 height="48" style="stroke:black;stroke-width:4" />
          <polygon points="2,98 48,4 98,98" style="stroke:black;stroke-width:4" />
       </symbol>
    </svg> 
    
    <!-- ============================================================ -->
    <!-- 'quiet' images -->
    <!-- ============================================================ -->
    <svg style="display: none">
    
      <symbol id="quiet-6"> 
       </symbol>
      <symbol id="quiet-8"> 
       </symbol>
      <symbol id="quiet-4"> 
       </symbol>
      <symbol id="quiet-2"> 
       </symbol>
      <symbol id="quiet-1"> 
       </symbol>
    </svg> 
    
    
    <!-- ============================================================ -->
    <!-- 'X' images -->
    <!-- ============================================================ -->
    <svg style="display: none">

      <symbol id="x-6"> 
          <polygon points="18.25 0, 12.5 25, 6.25 0, 0 25,  6.5 50,   0 75,  6.25 100,    12.5 75,    18.25 100,    25 75,     18.25 50,    25 25" style="stroke:black;stroke-width:4" />
       </symbol>
      <symbol id="x-8"> 
          <polygon points="37.5 0,  25 25,  12.5 0,  0 25,  12.5 50,  0 75,  12.5 100,    25 75,      37.5 100,    50 75,     37.5 50,      50 25" style="stroke:black;stroke-width:4" />
       </symbol>
      <symbol id="x-4"> 
          <polygon points="75 0,   50 25,   25 0,   0 25,   25 50,     0 75,  25 100,     50 75,      75 100,     100 75,     75 50,       100 25" style="stroke:black;stroke-width:4" />
       </symbol>
      <symbol id="x-2"> 
         <rect x="48" y="50" width=150 height="48" style="stroke:black;stroke-width:4" />
          <polygon points="75 0, 50 25, 25 0, 0 25, 25 50, 0 75, 25 100, 50 75, 75 100, 100 75, 75 50, 100 25" style="stroke:black;stroke-width:4" />
       </symbol>
      <symbol id="x-1"> 
         <rect x="48" y="50" width=350 height="48" style="stroke:black;stroke-width:4" />
          <polygon points="75 0, 50 25, 25 0, 0 25, 25 50, 0 75, 25 100, 50 75, 75 100, 100 75, 75 50, 100 25" style="stroke:black;stroke-width:4" />
       </symbol>
    </svg> 
    
    </body>
    </html>
    
`);
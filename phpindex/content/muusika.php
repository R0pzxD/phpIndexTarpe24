<h1>Muusika küsitlus</h1>
<form action="">
    <fieldset>
        <legend> muusikuid/ansambleid sa tead?</legend>
        <input type="checkbox" name="ansambel" id="abba" value="ABBA" onchange="valinAnsambel()">
        <label for="abba">ABBA</label>
        <br>
        <input type="checkbox" name="ansambel" id="the" value="The Beatles" onchange="valinAnsambel()">
        <label for="the">The Beatles</label>
        <br>
        <input type="checkbox" name="ansambel" id="radiohead" value="RadioHead" onchange="valinAnsambel()">
        <label for="radiohead">RadioHead</label>
        <br>
        <input type="checkbox" name="ansambel" id="acdc" value="AC/DC" onchange="valinAnsambel()">
        <label for="acdc">AC/DC</label>
        <br>
        <div id="vastus"></div>
    </fieldset>
    <fieldset>
        <legend>Mida arvad muusika kuulamisest koolis?</legend>
        <textarea name="arvamus" id="arvamus" cols="25" rows="5" onchange="sinuarvamus()"></textarea>
        <br>
        <div id="vastus2"></div>
    </fieldset>
    <fieldset>
        <legend>Mitu tundi päevas sa kuulad muusikat?</legend>
        <input type="number" name="aeg" id="aeg" value="0" onchange="mitutundipäevas()">
        <br>
        <div id="vastus3"></div>
    </fieldset>
    <fieldset>
        <legend>Kas sa kuulad raadiot?</legend>
        <input type="radio" name="küsimus" id="ja" value="ja" onclick="raadio()">
        <label for="ja">ja</label>
        <br>
        <input type="radio" name="küsimus" id="ei" value="ei" onclick="raadio()" >
        <label for="ei">ei</label>
        <br>
        <div id="vastus4"></div>
    </fieldset>

    <fieldset>
        <legend>Milliseid raadiojaamu oskad nimetada?</legend>
        <input type="text" name="raadio" id="raadio" oninput="raadiojaam()">
        <br>
        <div id="vastus5"></div>

    </fieldset>
    <fieldset>
        <legend>Millist muusikat sa kõige rohkem kuulad?</legend>
        <input type="radio" name="muusikagenre" id="jazz" value="jazz" onclick="muusika()">
        <label for="jazz">jazz</label>
        <br>
        <input type="radio" name="muusikagenre" id="punk" value="punk" onclick="muusika()" >
        <label for="punk">punk</label>
        <br>
        <input type="radio" name="muusikagenre" id="metal" value="metal" onclick="muusika()" >
        <label for="metal">metal</label>
        <br>
        <input type="radio" name="muusikagenre" id="country" value="country" onclick="muusika()" >
        <label for="country">country</label>
        <br>
        <input type="radio" name="muusikagenre" id="hiphop" value="hiphop" onclick="muusika()" >
        <label for="hiphop">Hip-hop</label>
        <br>
        <input type="radio" name="muusikagenre" id="rap" value="rap" onclick="muusika()" >
        <label for="rap">rap</label>
        <br>
        <div id="vastus6"></div>


    </fieldset>
    <fieldset>
        <input type="button"  value="puhasta" onclick="puhasta()">

    </fieldset>

</form>

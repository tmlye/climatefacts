<script>
	export let factsList
    export let initialIndex
    let index

    if (isValidIndex(initialIndex)) {
        setIndex(initialIndex)
    } else {
        setIndex(Math.floor(Math.random() * factsList.length))
    }

    function setIndex(newIndex) {
        newIndex = mod(newIndex, factsList.length)
        window.history.pushState('', 'Climate Fact ' + newIndex, '/' + newIndex)
        index = newIndex
    }

    function isValidIndex(index) {
        return isInteger(index) &&
               index >= 0 &&
               index < factsList.length
    }

    function isInteger(value) {
        let x = parseFloat(value);
        return !isNaN(value) && (x | 0) === x;
    }

    function mod(n, m) {
        return ((n % m) + m) % m
    }

    function next() {
        setIndex(index + 1)
    }
    function previous() {
        setIndex(index - 1)
    }
</script>

<style>
.container {
    max-width: 800px;
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
}
.fact {
    font-family: 'Merriweather', serif;
    font-size: 200%;
    margin: 40px 0 20px;
}
.controls {
    width: 120px;
    margin-right: auto;
    margin-left: auto;
}
svg:hover {
    stroke: white;
    color: white;
}
</style>

<div class="container">
  <div>
    <p class="fact">{factsList[index].fact}</p>
    <a class="source" href={factsList[index].sourceUrl}>{factsList[index].sourceText}</a>
  </div>
  <div class="controls">
    <svg on:click={previous} role="img" xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24" aria-labelledby="chevronLeftIconTitle" stroke="#D7D0C7" stroke-width="2.5714285714285716" stroke-linecap="round" stroke-linejoin="miter" fill="none" color="#D7D0C7"> <title id="chevronLeftIconTitle">Previous</title> <polyline points="14 18 8 12 14 6 14 6"/> </svg>
    <svg on:click={next} role="img" xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24" aria-labelledby="chevronRightIconTitle" stroke="#D7D0C7" stroke-width="2.5714285714285716" stroke-linecap="round" stroke-linejoin="miter" fill="none" color="#D7D0C7"> <title id="chevronRightIconTitle">Next</title> <polyline points="10 6 16 12 10 18 10 18"/></svg>
  </div>
</div>

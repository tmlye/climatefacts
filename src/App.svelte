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
    function tweet() {
        window.open(`https://twitter.com/intent/tweet?text=${factsList[index].fact} ${window.location}`)
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
    width: 280px;
    margin-right: auto;
    margin-left: auto;
}
#tweetIcon {
    margin: 0 50px;
}
svg:hover {
    stroke: white;
    color: white;
}
#tweetIcon:hover {
    fill: white;
}
</style>

<div class="container">
  <div>
    <p class="fact">{factsList[index].fact}</p>
    <a class="source" href={factsList[index].sourceUrl}>{factsList[index].sourceText}</a>
  </div>
  <div>
    <div class="controls">
      <svg on:click={previous} role="img" xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24" aria-labelledby="chevronLeftIconTitle" stroke="#D7D0C7" stroke-width="2.5714285714285716" stroke-linecap="round" stroke-linejoin="miter" fill="none" color="#D7D0C7"><title id="chevronLeftIconTitle">Previous</title> <polyline points="14 18 8 12 14 6 14 6"/> </svg>
      <svg id="tweetIcon" on:click={tweet} role="img" xmlns="http://www.w3.org/2000/svg" width="56px" height= "56px" viewBox="0 0 400 400" aria-labelledby="tweetIconTitle" stroke="#D7D0C7" color="#D7D0C7" fill="#D7D0C7"><title id="tweetIconTitle">Tweet</title><path d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"/></svg>
      <svg on:click={next} role="img" xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24" aria-labelledby="chevronRightIconTitle" stroke="#D7D0C7" stroke-width="2.5714285714285716" stroke-linecap="round" stroke-linejoin="miter" fill="none" color="#D7D0C7"><title id="chevronRightIconTitle">Next</title> <polyline points="10 6 16 12 10 18 10 18"/></svg>
    </div>
  </div>
</div>

<script>
	export let factsList
    let index = Math.floor(Math.random() * factsList.length)

    function mod(n, m) {
        return ((n % m) + m) % m
    }

    function next() {
        index += 1
        index = mod(index, factsList.length)
    }
    function previous() {
        index -= 1
        index = mod(index, factsList.length)
    }
</script>

<style>
:global(body) {
  background: #404040;
  color: #D7D0C7;
}
a {
  color: #E1AA5D;
  text-decoration: none;
}
a:hover {
  color: #F39D21;
}
.container {
  max-width: 800px;
  font-family: 'Open Sans', sans-serif;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position:relative;
}
*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.fact {
  max-width:500px;
  float:left;
  font-size: 200%;
  margin: 40px 0 20px;
  position:absolute;
}
p {
  margin: 0 0 10px;
}
.source {
  float:left;
}
svg {
  float:left;
}
svg:hover {
  stroke: white;
  color: white;
}

</style>

<div class="container">
  <p class="fact">{factsList[index].fact}</p>
  <a class="source" href={factsList[index].sourceUrl}>{factsList[index].sourceText}</a>
  <svg on:click={previous} role="img" xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24" aria-labelledby="chevronLeftIconTitle" stroke="#D7D0C7" stroke-width="2.5714285714285716" stroke-linecap="round" stroke-linejoin="miter" fill="none" color="#D7D0C7"> <title id="chevronLeftIconTitle">Previous</title> <polyline points="14 18 8 12 14 6 14 6"/> </svg>
  <svg on:click={next} role="img" xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24" aria-labelledby="chevronRightIconTitle" stroke="#D7D0C7" stroke-width="2.5714285714285716" stroke-linecap="round" stroke-linejoin="miter" fill="none" color="#D7D0C7"> <title id="chevronRightIconTitle">Next</title> <polyline points="10 6 16 12 10 18 10 18"/></svg>
</div>

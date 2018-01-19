<template>
  <div class="container">
    <div class="flex">
      <div class="loader">
      </div>
    </div>
    <div class="load-text">
      <div class="loader">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loader',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .spin{
    -webkit-transform-origin: 50% 58%;
    transform-origin:50% 58%;
    -ms-transform-origin:50% 58%; /* IE 9 */
    -webkit-animation: spin .2s infinite linear;
    -moz-animation: spin .2s infinite linear;
    -o-animation: spin .2s infinite linear;
    animation: spin .2s infinite linear;
  }
  .container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #292970;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    align-content: center;
    z-index: 100000;
    color: white;
  }

  .flex {
    min-height: 60pt;
  }

  /*
    Original version: http://www.bootply.com/128062

    This version adds support for IE 10+ and Firefox.
*/

  .glyphicon-refresh-animate {
    -animation: spin .7s infinite linear;
    -ms-animation: spin .7s infinite linear;
    -webkit-animation: spinw .7s infinite linear;
    -moz-animation: spinm .7s infinite linear;
  }

  @keyframes spin {
    from { transform: scale(1) rotate(0deg);}
    to { transform: scale(1) rotate(360deg);}
  }

  @-webkit-keyframes spinw {
    from { -webkit-transform: rotate(0deg);}
    to { -webkit-transform: rotate(360deg);}
  }

  @-moz-keyframes spinm {
    from { -moz-transform: rotate(0deg);}
    to { -moz-transform: rotate(360deg);}
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 48%;
  }

  .line {
    animation: expand 1s ease-in-out infinite;
    border-radius: 10px;
    display: inline-block;
    transform-origin: center center;
    margin: 0 3px;
    width: 1px;
    height: 25px;
  }

  .line:nth-child(1) {
    background: #27ae60;
  }

  .line:nth-child(2) {
    animation-delay: 180ms;
    background: #f1c40f;
  }

  .line:nth-child(3) {
    animation-delay: 360ms;
    background: #e67e22;
  }

  .line:nth-child(4) {
    animation-delay: 540ms;
    background: #2980b9;
  }

  @keyframes expand {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(2);
    }
  }

</style>

<template>
  <div id="app">
     <div class="main-wrapper">
       <navbar></navbar>
       <sidebar></sidebar>
        <div class="main-content">
          <router-view/>
        </div>
        <footery></footery>

     </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import './assets/js/scripts'
import './assets/js/custom'

export default {
  name: 'App',
  components:{
    'navbar': Navbar,
    'sidebar': Sidebar,
    'footery' : Footer
  }
}

</script>

<style>
  @import './assets/css/style.css';
  @import './assets/css/components.css';
</style>
    

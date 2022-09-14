<script lang="ts">
  import {Router, Link, Route} from 'svelte-navigator';
  import Home from './pages/Home.svelte';
  import Main from './pages/Main.svelte';
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/main">About</Link>
  </nav>
  <div>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/main">
      <Main />
    </Route>
  </div>
</Router>


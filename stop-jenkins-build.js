/**
 * The purpose is to freeze some project from deployments (like short time code freeze)
 * once in 30 seconds tries to find running build and stop it
 * run the script in dev tool on jenkins build page
 * there is no garantee that script works for all jenkins versions
 * */
setInterval(async () => {
  const linkBuilds = [...document.querySelectorAll('a[href]')].filter(x =>
    x.href.endsWith('/stop'),
  );
  for (let a of linkBuilds) {
    console.log('stopping - ' + a.href);
    try {
      const response = await new Ajax.Request(a.href);
      console.log('succesfully stoped - ' + response.status);
    } catch (err) {
      console.error('error stoping build - ' + err);
    }
  }
}, 30 * 1000);
export default function serviceWorkers ()
{
	if ('serviceWorker' in navigator) {
	  window.addEventListener('load',(e) => {
	    navigator.serviceWorker
	    .register('../cashe.min.js')
	    .then((registration) => {
	      // Registration was successful
	      console.log('ServiceWorker registration successful with scope: ', registration.scope);
	    })
	    .catch((err) => {
	      // registration failed :(
	      console.log('ServiceWorker registration failed: ', err);
	    });
	  });
	}
}
import fs from 'node:fs/promises'
import { globby } from 'globby'

// Get all HTML files from the output directory
const path = './dist'
const files = await globby(`${path}/**/*.html`)

await Promise.all(
    files.map(async (file) => {
		console.log('Processing file:', file);

		let html = await fs.readFile(file, 'utf-8')

		html = html.replaceAll("<!-- Yandex.Metrika counter -->", `
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript" >
			(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
			m[i].l=1*new Date();
			for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
			k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
		
			ym(95236209, "init", {
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true
			});
		</script>
		<noscript><div><img src="https://mc.yandex.ru/watch/95236209" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
		<!-- /Yandex.Metrika counter -->
		`);

		await fs.writeFile(file, html)
    })
)
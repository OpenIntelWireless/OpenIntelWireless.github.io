import{_ as e,c as o,o as t,a4 as a}from"./chunks/framework.DzjGgv20.js";const f=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"itlwm/Installation.md","filePath":"itlwm/Installation.md"}'),r={name:"itlwm/Installation.md"},l=a('<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><p>We are never responsible for any kind of damage caused by our products, please read our software license for more details.</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p><strong>NEVER</strong> use both <code>itlwm.kext</code> and <code>AirportItlwm.kext</code> at the same time.</p><p>Never install Kernel Extensions into <code>/Library/Extensions</code> or <code>/System/Library/Extensions</code>. Take your own risk when you do so.</p></div><h2 id="itlwm" tabindex="-1">itlwm <a class="header-anchor" href="#itlwm" aria-label="Permalink to &quot;itlwm&quot;">​</a></h2><p><strong><code>itlwm.kext</code> uses Apple&#39;s IOEthernet rather than IO80211. It is purely based on open-source resources, provides a stabler and faster performance, and the ability to unload on Kernels that use <code>prelined kernel</code>.</strong></p><p>After you&#39;ve downloaded our Kernel Extensions from GitHub Release:</p><ol><li>Unzip.</li><li>Copy the kext files into your Bootloader&#39;s kext folder in your EFI partition.</li><li>Make necessary adjustments to your Bootloader&#39;s config.</li><li>Reboot and enjoy!</li></ol><p>If this didn&#39;t work for you, please read the <a href="./Troubleshooting.html">Troubleshooting</a> section.</p><h2 id="airportitlwm" tabindex="-1">AirportItlwm <a class="header-anchor" href="#airportitlwm" aria-label="Permalink to &quot;AirportItlwm&quot;">​</a></h2><p><strong><code>AirportItlwm.kext</code> uses Apple&#39;s IO80211Family. It provides certain Airport features but lacks stability compared with <code>itlwm.kext</code> due to the ambiguity of reverse engineering.</strong></p><p>All steps from <code>itlwm.kext</code> + <em><strong>one</strong></em> of the following steps to load IO80211Family on macOS Catalina and earlier (level of recommendation decreases):</p><ul><li>Enable Apple Secure Boot (<strong>Please read OpenCore&#39;s official manual</strong>).</li><li>Force <code>IO80211Family</code> to load. 「Supports OpenCore and Clover(not tested)」 (Read the <code>Kernel - Force</code> section in OpenCore&#39;s manual for more info).</li><li>Load AirportItlwm from Terminal (Continuity features may <em>not</em> work).</li><li>Extract IO80211Family from the system, insert AirportItlwm as a Plugin, and load the bundle with a bootloader.</li><li>Disable SIP and install AirportItlwm into <code>/Library/Extensions</code> (Take your own risk).</li></ul><blockquote><p>The latter two methods are not recommended, hence details are not provided.</p></blockquote>',13),i=[l];function n(s,d,c,p,m,u){return t(),o("div",null,i)}const w=e(r,[["render",n]]);export{f as __pageData,w as default};

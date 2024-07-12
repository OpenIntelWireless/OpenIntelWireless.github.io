import{_ as e,c as t,o,a4 as a}from"./chunks/framework.DzjGgv20.js";const f=JSON.parse('{"title":"Frequently Asked Questions","description":"","frontmatter":{},"headers":[],"relativePath":"itlwm/FAQ.md","filePath":"itlwm/FAQ.md"}'),i={name:"itlwm/FAQ.md"},r=a('<h1 id="frequently-asked-questions" tabindex="-1">Frequently Asked Questions <a class="header-anchor" href="#frequently-asked-questions" aria-label="Permalink to &quot;Frequently Asked Questions&quot;">​</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><h3 id="what-s-the-difference-between-alpha-prerelease-and-latest-release" tabindex="-1">What&#39;s the difference between <strong>Alpha Prerelease</strong> and <strong>Latest Release</strong> <a class="header-anchor" href="#what-s-the-difference-between-alpha-prerelease-and-latest-release" aria-label="Permalink to &quot;What&#39;s the difference between **Alpha Prerelease** and **Latest Release**&quot;">​</a></h3><ul><li><strong>Alpha Prerelease</strong></li></ul><p>A testing version automatically compiled by GitHub actions based on the latest source code on the <code>master</code> branch.</p><p>Note that <code>Alpha Prerelease</code> Kexts are never tested; we do not guarantee their availability, usability, and stability.</p><p><em><strong>NOT recommended</strong></em> for daily use</p><ul><li><strong>Latest Stable Release</strong></li></ul><p>An official stable version. This version is usually released after new features are implemented and tested.</p><p><em><strong>Recommended</strong></em> for daily use.</p><h3 id="which-kext-should-i-use" tabindex="-1">Which Kext Should I Use <a class="header-anchor" href="#which-kext-should-i-use" aria-label="Permalink to &quot;Which Kext Should I Use&quot;">​</a></h3><p>Read the <a href="./Installation.html">Installation</a> guide for more information.</p><h3 id="is-my-card-supported" tabindex="-1">Is My Card Supported <a class="header-anchor" href="#is-my-card-supported" aria-label="Permalink to &quot;Is My Card Supported&quot;">​</a></h3><p>Read the <a href="./Compat.html">Compatibility</a> table for more information.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="advanced-user-configuration" tabindex="-1">Advanced User Configuration <a class="header-anchor" href="#advanced-user-configuration" aria-label="Permalink to &quot;Advanced User Configuration&quot;">​</a></h3><p>The following <code>boot-args</code> are available in the latest version:</p><ul><li><code>itlwm_cc=</code><a href="http://xml.coverpages.org/country3166.html" target="_blank" rel="noreferrer"><code>COUNTRY_CODE</code></a> Change the country code to a desired one, effective on all devices, mostly useful for iwn, 7000 &amp; 8000 series iwm using <code>itlwm.kext</code> or running macOS earlier than 10.14.</li><li><code>-novht</code> Disable IEEE802.11AC support, useful if router has compatibility issues.</li><li><code>-noht40</code> Disables 40MHz when using 2.4GHz (Use this option if the network with this config causes instabilities. Natively supported adapters by Apple disable 2.4GHz HT40 by default)</li></ul><h3 id="limitation-of-airportitlwm-kext" tabindex="-1">Limitation of <code>AirportItlwm.kext</code> <a class="header-anchor" href="#limitation-of-airportitlwm-kext" aria-label="Permalink to &quot;Limitation of `AirportItlwm.kext`&quot;">​</a></h3><ul><li>Handoff and Universal Clipboard are the only supported <a href="https://support.apple.com/en-us/HT204681" target="_blank" rel="noreferrer">Continuity features</a>.</li><li>Instant Hotspot from iPhone can be recognized but the hotspot must be enabled directly on the iPhone first, see <a href="https://github.com/OpenIntelWireless/itlwm/issues/749#issuecomment-1055886022" target="_blank" rel="noreferrer">itlwm #749</a></li><li>Unable to connect to Hidden Networks.</li></ul><h3 id="how-to-connect-to-my-wi-fi-with-itlwm-kext" tabindex="-1">How to connect to my Wi-Fi with <code>itlwm.kext</code> <a class="header-anchor" href="#how-to-connect-to-my-wi-fi-with-itlwm-kext" aria-label="Permalink to &quot;How to connect to my Wi-Fi with `itlwm.kext`&quot;">​</a></h3><ul><li>By <a href="/HeliPort/">HeliPort</a> (Recommended).</li><li>Fill in the essential information in <code>Info.plist</code>, located inside <strong><code>itlwm.kext</code></strong>.</li></ul><h3 id="how-to-disconnect-my-wi-fi-with-itlwm-kext" tabindex="-1">How to disconnect my Wi-Fi with <code>itlwm.kext</code> <a class="header-anchor" href="#how-to-disconnect-my-wi-fi-with-itlwm-kext" aria-label="Permalink to &quot;How to disconnect my Wi-Fi with `itlwm.kext`&quot;">​</a></h3><p>Use HeliPort&#39;s Options Menu (press the <kbd>Option</kbd> key while opening).</p><h3 id="heliport-shows-itlwm-not-loaded" tabindex="-1">HeliPort shows <code>itlwm not loaded</code> <a class="header-anchor" href="#heliport-shows-itlwm-not-loaded" aria-label="Permalink to &quot;HeliPort shows `itlwm not loaded`&quot;">​</a></h3><p>Visit our <a href="/General/Troubleshooting.html">Troubleshooting</a> guide for more info.</p><h3 id="nothing-appears-in-system-preferences" tabindex="-1">Nothing appears in System Preferences <a class="header-anchor" href="#nothing-appears-in-system-preferences" aria-label="Permalink to &quot;Nothing appears in System Preferences&quot;">​</a></h3><p>Visit our <a href="/General/Troubleshooting.html">Troubleshooting</a> guide for more info.</p><h3 id="about-platform-noise" tabindex="-1">About Platform Noise <a class="header-anchor" href="#about-platform-noise" aria-label="Permalink to &quot;About Platform Noise&quot;">​</a></h3><p>Read this <a href="https://wireless.wiki.kernel.org/en/users/drivers/iwlwifi#about_platform_noise" target="_blank" rel="noreferrer">explanation</a> from Linux for more info.</p><h3 id="can-i-use-bluetooth-with-wi-fi" tabindex="-1">Can I use Bluetooth with Wi-Fi <a class="header-anchor" href="#can-i-use-bluetooth-with-wi-fi" aria-label="Permalink to &quot;Can I use Bluetooth with Wi-Fi&quot;">​</a></h3><p>2.4 GHz Yes, but it is known to cause performance issues.</p><p>5 GHz Yes.</p><p>Read this <a href="https://wireless.wiki.kernel.org/en/users/drivers/iwlwifi#wi-fibluetooth_coexistence" target="_blank" rel="noreferrer">explanation</a> from Linux for more info.</p><h3 id="performance-sucks" tabindex="-1">Performance SUCKS <a class="header-anchor" href="#performance-sucks" aria-label="Permalink to &quot;Performance SUCKS&quot;">​</a></h3><p>Using the latest stable version (v2.1.0) connected to 5 GHz (160 MHz), the expected maximum speed is <code>950 Mbps</code> for download and <code>650 Mbps</code> for upload.</p><blockquote><p>Tested with 9560AC &amp; AX201 using iperf3</p></blockquote><p>Performance is expected to have no difference when compared with other OS in 802.11AC mode.</p><h3 id="why-does-my-adaptor-turn-back-on-after-a-sleep-wake-cycle" tabindex="-1">Why does my adaptor turn back on after a sleep-wake cycle <a class="header-anchor" href="#why-does-my-adaptor-turn-back-on-after-a-sleep-wake-cycle" aria-label="Permalink to &quot;Why does my adaptor turn back on after a sleep-wake cycle&quot;">​</a></h3><p>By default, when the system boots, itlwm starts to initialize the Wi-Fi card and starts connecting to the Internet. This process can all be done before the system boots into user space and launches HeliPort. So, even if HeliPort has stored a property that indicates whether the card should be on/off by default and immediately adjusts itlwm&#39;s behavior, your card has been turned on anyway before then.</p><p>Currently, there is no way to make itlwm not power on the card by default on boot. If it&#39;s designed to be off by default and requires HeliPort to power it on, users may have to wait longer until the card is ready and it&#39;s not friendly for users that don&#39;t use HeliPort but rely on itlwm&#39;s Plist.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><h3 id="is-it-a-replacement-of-natively-supported-broadcom-cards" tabindex="-1">Is it a replacement of natively supported Broadcom Cards <a class="header-anchor" href="#is-it-a-replacement-of-natively-supported-broadcom-cards" aria-label="Permalink to &quot;Is it a replacement of natively supported Broadcom Cards&quot;">​</a></h3><p>No.</p><h3 id="is-it-a-replacement-of-usb-wi-fi-dongles" tabindex="-1">Is it a replacement of USB Wi-Fi Dongles <a class="header-anchor" href="#is-it-a-replacement-of-usb-wi-fi-dongles" aria-label="Permalink to &quot;Is it a replacement of USB Wi-Fi Dongles&quot;">​</a></h3><p>Yes, 100%.</p><h3 id="why-does-my-adapter-shows-up-as-ethernet-in-system-preferences-instead-of-wi-fi" tabindex="-1">Why does my adapter shows up as Ethernet in System Preferences instead of Wi-Fi <a class="header-anchor" href="#why-does-my-adapter-shows-up-as-ethernet-in-system-preferences-instead-of-wi-fi" aria-label="Permalink to &quot;Why does my adapter shows up as Ethernet in System Preferences instead of Wi-Fi&quot;">​</a></h3><p><code>itlwm.kext</code> uses Apple&#39;s public IOEthernetController instead of the private IO80211Family.</p><blockquote><p>Spoofing into Ethernet does not affect performance.</p></blockquote><p><code>AirportItlwm</code> enables the native Wi-Fi selection menu with limited continuity features.</p><h3 id="does-it-support-connecting-to-hidden-wi-fi-networks" tabindex="-1">Does it support connecting to Hidden Wi-Fi networks <a class="header-anchor" href="#does-it-support-connecting-to-hidden-wi-fi-networks" aria-label="Permalink to &quot;Does it support connecting to Hidden Wi-Fi networks&quot;">​</a></h3><p>MVM Gen 2 (iwx) cards do not support connecting to Hidden Wi-Fi networks.</p><p>iwm and iwn devices:</p><ul><li><code>itlwm.kext</code>: Yes</li><li><code>AirportItlwm.kext</code>: No</li></ul><h3 id="does-it-support-wpa2-3-enterprise-or-802-1x" tabindex="-1">Does it support WPA2/3-Enterprise or 802.1X <a class="header-anchor" href="#does-it-support-wpa2-3-enterprise-or-802-1x" aria-label="Permalink to &quot;Does it support WPA2/3-Enterprise or 802.1X&quot;">​</a></h3><ul><li><code>itlwm.kext</code>: No</li><li><code>AirportItlwm.kext</code>: Yes</li></ul><p>Credit: <a href="https://github.com/usr-sse2" target="_blank" rel="noreferrer">usr-sse2</a></p><h3 id="does-it-support-location-services" tabindex="-1">Does it support Location Services <a class="header-anchor" href="#does-it-support-location-services" aria-label="Permalink to &quot;Does it support Location Services&quot;">​</a></h3><p>Supported on <code>AirportItlwm.kext</code>.</p><blockquote><p><code>itlwm.kext</code> reports the Wi-Fi card as an Ethernet NIC to macOS, rather than Wi-Fi. This means that Find My does not work, since it relies on Wi-Fi data (like what networks are around you). This likely means that other location services don&#39;t work as well.</p><p>-- <a href="https://github.com/1Revenger1" target="_blank" rel="noreferrer">1Revenger1</a></p></blockquote><h3 id="does-it-support-apple-s-continuity-framework-airdrop-handoff" tabindex="-1">Does it support Apple&#39;s Continuity Framework (Airdrop, HandOff) <a class="header-anchor" href="#does-it-support-apple-s-continuity-framework-airdrop-handoff" aria-label="Permalink to &quot;Does it support Apple&#39;s Continuity Framework (Airdrop, HandOff)&quot;">​</a></h3><p>Only <em>Handoff</em> and <em>Universal Clipboard</em> works with AirportItlwm, other features are not supported.</p><p><em>Note:</em> Handoff only works in one direction in macOS Monterey and newer (from mobile devices to Mac) due to the broken <code>bluetoothd</code> newly ported from iOS.</p><h3 id="can-i-use-it-to-create-a-personal-hotspot" tabindex="-1">Can I use it to create a Personal Hotspot <a class="header-anchor" href="#can-i-use-it-to-create-a-personal-hotspot" aria-label="Permalink to &quot;Can I use it to create a Personal Hotspot&quot;">​</a></h3><p>No.</p><h3 id="can-i-monitor-upload-and-download-speed" tabindex="-1">Can I monitor Upload and Download speed <a class="header-anchor" href="#can-i-monitor-upload-and-download-speed" aria-label="Permalink to &quot;Can I monitor Upload and Download speed&quot;">​</a></h3><p>Yes, this feature was added since v1.2.0.</p><h3 id="does-it-support-40-80-160-mhz" tabindex="-1">Does it support 40/80/160 MHz <a class="header-anchor" href="#does-it-support-40-80-160-mhz" aria-label="Permalink to &quot;Does it support 40/80/160 MHz&quot;">​</a></h3><p>HT40 (40 MHz) support was added since v1.3.0.</p><p>VHT80 &amp; VHT160 support was implemented since v2.0.0.</p><p>HE is currently disabled.</p><h3 id="does-it-support-802-11ac-and-802-11ax" tabindex="-1">Does it support 802.11AC and 802.11AX <a class="header-anchor" href="#does-it-support-802-11ac-and-802-11ax" aria-label="Permalink to &quot;Does it support 802.11AC and 802.11AX&quot;">​</a></h3><p>Yes, 802.11AC and 802.11AX (currently disabled) support was implemented since v2.0.0.</p><h2 id="design" tabindex="-1">Design <a class="header-anchor" href="#design" aria-label="Permalink to &quot;Design&quot;">​</a></h2><h3 id="why-not-port-code-directly-from-linux-but-openbsd" tabindex="-1">Why not port code directly from Linux but OpenBSD <a class="header-anchor" href="#why-not-port-code-directly-from-linux-but-openbsd" aria-label="Permalink to &quot;Why not port code directly from Linux but OpenBSD&quot;">​</a></h3><p>The amount of code from Linux is enormous. It will likely take forever to finish such a project with our current manpower.</p>',76),n=[r];function s(l,d,h,p,c,u){return o(),t("div",null,n)}const w=e(i,[["render",s]]);export{f as __pageData,w as default};
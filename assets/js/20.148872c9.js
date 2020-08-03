(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{371:function(e,t,r){"use strict";r.r(t);var o=r(42),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"itlwm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#itlwm"}},[e._v("#")]),e._v(" itlwm")]),e._v(" "),r("p",[r("em",[r("strong",[e._v("itlwm")])]),e._v(" is an open source Intel Wi-Fi project for macOS, the vast majority of code is ported from OpenBSD and some contents are referenced by Linux's "),r("code",[e._v("iwlwifi")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"download"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[e._v("#")]),e._v(" Download")]),e._v(" "),r("p",[r("em",[r("strong",[e._v("itlwm")])]),e._v(" contains two Kernel Extensions: "),r("strong",[r("code",[e._v("itlwm.kext")])]),e._v(" and "),r("strong",[r("code",[e._v("itlwmx.kext")])]),e._v("; they are both distributed on the project's GitHub Release Page.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/OpenIntelWireless/itlwm/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Download Page"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"compatibility"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),r("p",[e._v("Visit "),r("RouterLink",{attrs:{to:"/itlwm/Compatibility.html"}},[e._v("Compatibility")]),e._v(" for more information")],1),e._v(" "),r("h2",{attrs:{id:"questions-and-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#questions-and-issues"}},[e._v("#")]),e._v(" Questions and Issues")]),e._v(" "),r("p",[e._v("Checkout our "),r("RouterLink",{attrs:{to:"/itlwm/FAQ.html"}},[e._v("FAQ Page")]),e._v(" for more info.")],1),e._v(" "),r("p",[e._v("If you have other questions or feedback, feel free to "),r("a",{attrs:{href:"https://gitter.im/OpenIntelWireless/itlwm?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://badges.gitter.im/OpenIntelWireless/itlwm.svg",alt:"Join the chat at https://gitter.im/OpenIntelWireless/itlwm"}}),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Before opening an GitHub Issue, you're recommended to reconfirm it with us on "),r("a",{attrs:{href:"https://gitter.im/OpenIntelWireless/itlwm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitter"),r("OutboundLink")],1),e._v(" and follow our "),r("RouterLink",{attrs:{to:"/General/Issues.html"}},[e._v("GitHub Issues Guide Line")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"background"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),r("blockquote",[r("p",[e._v("Written by zxystd on March 1, 2020")]),e._v(" "),r("p",[e._v("Translated by Bat.bat & stevezhengshiqi, improved by s0ullight")])]),e._v(" "),r("p",[e._v("It has been exactly three and a half months since I released the Intel Bluetooth Firmware Uploader Kext, and I truly appreciate everyone who supports me. I began using MacOS half a year ago. Without having a solid understanding of IOKit, I tried my best to move forward and things might be wrong. I did this with full caution and passion for Hackintoshing.")]),e._v(" "),r("p",[e._v("People who follow me should know I have another Intel Wi-Fi Kext Repository "),r("a",{attrs:{href:"https://github.com/zxystd/AppleIntelWifiAdapter",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppleIntelWifiAdapter"),r("OutboundLink")],1),e._v(" which is based on Linux's iwlwifi code; so far the Kext is able to upload firmware for Intel Wi-Fi cards of "),r("code",[e._v("3")]),e._v(", "),r("code",[e._v("7")]),e._v(", "),r("code",[e._v("8")]),e._v(", "),r("code",[e._v("9")]),e._v(", "),r("code",[e._v("ax")]),e._v(" series and do simple "),r("code",[e._v("RX")]),e._v(" & "),r("code",[e._v("TX")]),e._v(" I/O. Because the integrated "),r("code",[e._v("80211")]),e._v(" ported from OpenBSD in that project has so many things that require testing, I came up with the idea of porting the entire iwm driver from OpenBSD. This repo is the result. Since I ported Linux drivers before, the porting progress is extremely smooth this time. It only took half a day to port the entire code and then I spent roughly one month to tweak it.")]),e._v(" "),r("p",[r("strong",[e._v("Now, Intel Wi-Fi Cards are finally able to access the Internet!")])]),e._v(" "),r("p",[e._v("Don't be misled by "),r("code",[e._v("Ethernet")]),e._v(" shown in System Preferences. The reason is that I didn't use Apple's closed source "),r("code",[e._v("IO80211Family")]),e._v(", but rather spoofed the hardware as an Ethernet device, just like USB Wi-Fi cards.")]),e._v(" "),r("p",[e._v("I decided to open source the code. "),r("strong",[e._v("Anyone can view my code and modify it, but whoever you are, you have to inform me the content you modified and keep the copyright information in the code, thank you very much!")])]),e._v(" "),r("p",[e._v('I will keep making progress. Everyone should keep a positive attitude and believe in the immense power of the Open Source community, the power from China and the World. So far I\'ve taken a big step. Not only has my theory been proven to be correct, but also made into a reality. WE NEED TO BREAK THE STEREOTYPE OF "GIVE UP IN INTEL!"')]),e._v(" "),r("h2",{attrs:{id:"development-status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#development-status"}},[e._v("#")]),e._v(" Development Status")]),e._v(" "),r("p",[e._v("Visit "),r("a",{attrs:{href:"https://github.com/OpenIntelWireless/itlwm/projects",target:"_blank",rel:"noopener noreferrer"}},[e._v("Projects"),r("OutboundLink")],1),e._v(" for more information")]),e._v(" "),r("h2",{attrs:{id:"supported-devices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-devices"}},[e._v("#")]),e._v(" Supported Devices")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/itlwm/FAQ.html#Compatibility"}},[e._v("Read our docs")])],1),e._v(" "),r("h2",{attrs:{id:"credit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#credit"}},[e._v("#")]),e._v(" Credit")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/mercurysquad/Voodoo80211",target:"_blank",rel:"noopener noreferrer"}},[e._v("mercurysquad/Voodoo80211"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/openbsd/src",target:"_blank",rel:"noopener noreferrer"}},[e._v("openbsd/src"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/torvalds/linux",target:"_blank",rel:"noopener noreferrer"}},[e._v("torvalds/linux"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/rpeshkov/black80211",target:"_blank",rel:"noopener noreferrer"}},[e._v("rpeshkov/black80211"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/AppleIntelWiFi/Black80211-Catalina",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppleIntelWiFi/Black80211-Catalina"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"acknowledge"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#acknowledge"}},[e._v("#")]),e._v(" Acknowledge")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/startpenghubingzhou",target:"_blank",rel:"noopener noreferrer"}},[e._v("@penghubingzhou"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/williambj1",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Bat.bat"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/XStar-Dev",target:"_blank",rel:"noopener noreferrer"}},[e._v("@iStarForever"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/stevezhengshiqi",target:"_blank",rel:"noopener noreferrer"}},[e._v("@stevezhengshiqi"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/DogAndPot",target:"_blank",rel:"noopener noreferrer"}},[e._v("@DogAndPot"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("For providing resources and help in Hackintoshing.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Daliansky",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Daliansky"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("For providing Wi-Fi cards.")])])}),[],!1,null,null,null);t.default=n.exports}}]);
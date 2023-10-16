"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96833],{953676:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-218abdde","path":"/devices/JTQJ-BF-01LM_BW.html","title":"Xiaomi JTQJ-BF-01LM/BW control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi JTQJ-BF-01LM/BW control via MQTT","description":"Integrate your Xiaomi JTQJ-BF-01LM/BW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Sensitivity","slug":"sensitivity","link":"#sensitivity","children":[]},{"level":3,"title":"Self-test","slug":"self-test","link":"#self-test","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Gas (binary)","slug":"gas-binary","link":"#gas-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Gas density (numeric)","slug":"gas-density-numeric","link":"#gas-density-numeric","children":[]},{"level":3,"title":"Selftest (enum)","slug":"selftest-enum","link":"#selftest-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1697478767000},"filePathRelative":"devices/JTQJ-BF-01LM_BW.md"}')},604326:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var a=i(166252);const s=(0,a._)("h1",{id:"xiaomi-jtqj-bf-01lm-bw",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#xiaomi-jtqj-bf-01lm-bw","aria-hidden":"true"},"#"),(0,a.Uk)(" Xiaomi JTQJ-BF-01LM/BW")],-1),n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"JTQJ-BF-01LM/BW")],-1),l=(0,a._)("td",null,"Vendor",-1),o=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"MiJia gas leak detector")],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"gas, battery_low, tamper, sensitivity, gas_density, selftest, linkquality")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/JTQJ-BF-01LM-BW.jpg",alt:"Xiaomi JTQJ-BF-01LM/BW"})])],-1),h=(0,a._)("tr",null,[(0,a._)("td",null,"White-label"),(0,a._)("td",null,"Xiaomi YTC4019RT")],-1),u=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Plug the device in and wait for around 5mins, while it performs its self-tests. A successful self-test is indicated by couple of beeps and a steady green led. Now the device is ready for pairing. To initiate pairing quickly press the button three times in a row.</p><h3 id="sensitivity" tabindex="-1"><a class="header-anchor" href="#sensitivity" aria-hidden="true">#</a> Sensitivity</h3><p>The sensitivity can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;sensitivity&quot;: &quot;SENSITIVITY&quot;}</code> where <code>SENSITIVITY</code> is one of the following values: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="self-test" tabindex="-1"><a class="header-anchor" href="#self-test" aria-hidden="true">#</a> Self-test</h3><p>A self-test can be trigged by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;selftest&quot;: &quot;&quot;}</code>. If the selftest is executed successfully you will hear the device beep in 30 seconds.</p>',7),p=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="gas-binary" tabindex="-1"><a class="header-anchor" href="#gas-binary" aria-hidden="true">#</a> Gas (binary)</h3><p>Indicates whether the device detected gas. Value can be found in the published state on the <code>gas</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum" aria-hidden="true">#</a> Sensitivity (enum)</h3><p>Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="gas-density-numeric" tabindex="-1"><a class="header-anchor" href="#gas-density-numeric" aria-hidden="true">#</a> Gas density (numeric)</h3><p>Value can be found in the published state on the <code>gas_density</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="selftest-enum" tabindex="-1"><a class="header-anchor" href="#selftest-enum" aria-hidden="true">#</a> Selftest (enum)</h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;selftest&quot;: NEW_VALUE}</code>. The possible values are: ``.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),b={},y=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),s,(0,a._)("table",null,[n,(0,a._)("tbody",null,[d,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Xiaomi"},{default:(0,a.w5)((()=>[(0,a.Uk)("Xiaomi")])),_:1})])]),o,r,c,h])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,a.kq)(" Notes END: Do not edit below this line "),p])}]])}}]);
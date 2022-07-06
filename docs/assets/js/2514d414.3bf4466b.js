"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[698],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=l,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8076:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return c}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),i=["components"],r={sidebar_position:2},s="Compiler REPL",d={unversionedId:"usage/repl",id:"usage/repl",title:"Compiler REPL",description:"When you start the OpenGOAL compiler, you'll see a prompt like this:",source:"@site/documentation/usage/repl.md",sourceDirName:"usage",slug:"/usage/repl",permalink:"/docs/usage/repl",draft:!1,editUrl:"https://github.com/open-goal/open-goal.github.io/tree/master/documentation/usage/repl.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"How to replace textures",permalink:"/docs/usage/texture_replacement"},next:{title:"OpenGOAL Debugger",permalink:"/docs/usage/debugging"}},p={},c=[{value:"Connecting To Target Example",id:"connecting-to-target-example",level:2},{value:"General Command Listing",id:"general-command-listing",level:2},{value:"<code>(e)</code>",id:"e",level:3},{value:"<code>(:exit)</code>",id:"exit",level:3},{value:"<code>(lt)</code>",id:"lt",level:3},{value:"<code>r</code>",id:"r",level:3},{value:"<code>shutdown-target</code>",id:"shutdown-target",level:3},{value:"<code>:status</code>",id:"status",level:3},{value:"Compiler Forms - Compiler Commands",id:"compiler-forms---compiler-commands",level:2},{value:"<code>reload</code>",id:"reload",level:3},{value:"<code>get-info</code>",id:"get-info",level:3},{value:"<code>autocomplete</code>",id:"autocomplete",level:3},{value:"<code>seval</code>",id:"seval",level:3},{value:"<code>asm-file</code>",id:"asm-file",level:3},{value:"<code>asm-data-file</code>",id:"asm-data-file",level:3},{value:"<code>gs</code>",id:"gs",level:3},{value:"<code>set-config!</code>",id:"set-config",level:3},{value:"<code>in-package</code>",id:"in-package",level:3},{value:"<code>build-dgos</code>",id:"build-dgos",level:3},{value:"<code>add-macro-to-autocomplete</code>",id:"add-macro-to-autocomplete",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compiler-repl"},"Compiler REPL"),(0,o.kt)("p",null,"When you start the OpenGOAL compiler, you'll see a prompt like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"OpenGOAL Compiler 0.2\ng  >\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"g")," indicates that you can input OpenGOAL compiler commands.  For a listing of common commands run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(repl-help)\n")),(0,o.kt)("h2",{id:"connecting-to-target-example"},"Connecting To Target Example"),(0,o.kt)("p",null,"In order to execute OpenGOAL code, you must connect to the listener."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},";; we cannot execute OpenGOAL code unless we connect the listener\ng  > (+ 1 2 3)\nREPL Error: Compilation generated code, but wasn't supposed to\n\n;; connect to the target\ng  > (lt)\n[Listener] Socket connected established! (took 0 tries). Waiting for version...\nGot version 0.2 OK!\n[Debugger] Context: valid = true, s7 = 0x147d24, base = 0x2000000000, tid = 1297692\n\n;; execute OpenGOAL code\ngc > (+ 1 2 3)\n6\n\n;; quit the compiler and reset the target for next time.\ngc > (e)\n[Listener] Closed connection to target\n")),(0,o.kt)("p",null,"Once we are connected, we see that there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"gc")," prompt. This indicates that the listener has an open socket connection. Now the REPL will accept both compiler commands and OpenGOAL source code.  All ",(0,o.kt)("inlineCode",{parentName:"p"},"(format #t ...")," debugging prints (like ",(0,o.kt)("inlineCode",{parentName:"p"},"printf"),") will show up in this REPL. Each time you run something in the REPL, the result is printed as a decimal number. If the result doesn't make sense to print as a decimal, or there is no result, you will get some random number."),(0,o.kt)("p",null,"In the future there will be a fancier printer here."),(0,o.kt)("h2",{id:"general-command-listing"},"General Command Listing"),(0,o.kt)("h3",{id:"e"},(0,o.kt)("inlineCode",{parentName:"h3"},"(e)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(e)\n")),(0,o.kt)("p",null,"Exit the compiler once the current REPL command is finished. Takes no arguments. If we are connected to a target through the listener, attempts to reset the target."),(0,o.kt)("h3",{id:"exit"},(0,o.kt)("inlineCode",{parentName:"h3"},"(:exit)")),(0,o.kt)("p",null,"Exit Compiler"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(:exit)\n")),(0,o.kt)("p",null,"Same as ",(0,o.kt)("inlineCode",{parentName:"p"},"(e)"),", just requires more typing. ",(0,o.kt)("inlineCode",{parentName:"p"},"(e)")," is actually a macro for ",(0,o.kt)("inlineCode",{parentName:"p"},"(:exit)"),". Takes no arguments."),(0,o.kt)("h3",{id:"lt"},(0,o.kt)("inlineCode",{parentName:"h3"},"(lt)")),(0,o.kt)("p",null,"Listen to Target"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},'(lt ["ip address"] [port-number])\n')),(0,o.kt)("p",null,"Connect the listener to a running target. The IP address defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},'"127.0.0.1"')," and the port to ",(0,o.kt)("inlineCode",{parentName:"p"},"8112")," (",(0,o.kt)("inlineCode",{parentName:"p"},"DECI2_PORT")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"listener_common.h"),"). These defaults are usually what you want, so you can just run ",(0,o.kt)("inlineCode",{parentName:"p"},"(lt)")," to connect."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"g  > (lt)\n[Listener] Socket connected established! (took 0 tries). Waiting for version...\nGot version 0.2 OK!\n[Debugger] Context: valid = true, s7 = 0x147d24, base = 0x2000000000, tid = 1296302\ngc >\n")),(0,o.kt)("h3",{id:"r"},(0,o.kt)("inlineCode",{parentName:"h3"},"r")),(0,o.kt)("p",null,"Reset the target."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},'(r ["ip address"] [port-number])\n')),(0,o.kt)("p",null,"Regardless of the current state, attempt to reset the target and reconnect. After this, the target will have nothing loaded.  Like with ",(0,o.kt)("inlineCode",{parentName:"p"},"(lt)"),", the default IP and port are probably what you want."),(0,o.kt)("p",null,"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"r")," is actually a macro."),(0,o.kt)("h3",{id:"shutdown-target"},(0,o.kt)("inlineCode",{parentName:"h3"},"shutdown-target")),(0,o.kt)("p",null,"If the target is connected, make it exit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(shutdown-target)\n")),(0,o.kt)("p",null,"The target will print"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GOAL Runtime Shutdown (code 2)\n")),(0,o.kt)("p",null,"before it exits."),(0,o.kt)("h3",{id:"status"},(0,o.kt)("inlineCode",{parentName:"h3"},":status")),(0,o.kt)("p",null,"Ping the target."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(:status)\n")),(0,o.kt)("p",null,"Send a ping-like message to the target. Requires the target to be connected. If successful, prints nothing.  Will time-out and display and error message if the GOAL kernel or code dispatched by the kernel is stuck in an infinite loop.  Unlikely to be used often."),(0,o.kt)("h2",{id:"compiler-forms---compiler-commands"},"Compiler Forms - Compiler Commands"),(0,o.kt)("p",null,"These forms are used to control the GOAL compiler, and are usually entered at the GOAL REPL, or as part of a macro that's executed at the GOAL REPL. These shouldn't be used in GOAL source code."),(0,o.kt)("h3",{id:"reload"},(0,o.kt)("inlineCode",{parentName:"h3"},"reload")),(0,o.kt)("p",null,"Reload the GOAL compiler"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(reload)\n")),(0,o.kt)("p",null,"Disconnect from the target and reset all compiler state.  This is equivalent to exiting the compiler and opening it again."),(0,o.kt)("h3",{id:"get-info"},(0,o.kt)("inlineCode",{parentName:"h3"},"get-info")),(0,o.kt)("p",null,"Get information about something."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(get-info <something>)\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"get-info")," to see what something is and where it is defined."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},";; get info about a global variable:\ng  > (get-info *kernel-context*)\n[Global Variable] Type: kernel-context Defined: text from goal_src/kernel/gkernel.gc, line: 88\n(define *kernel-context* (new 'static 'kernel-context\n\n;; get info about a function. This particular function is forward declared, so there's an entry for that too.\n;; global functions are also global variables, so there's a global variable entry as well.\ng  > (get-info fact)\n[Forward-Declared] Name: fact Defined: text from goal_src/kernel/gcommon.gc, line: 1098\n(define-extern fact (function int int))\n\n[Function] Name: fact Defined: text from kernel/gcommon.gc, line: 1099\n(defun fact ((x int))\n\n[Global Variable] Type: (function int int) Defined: text from goal_src/kernel/gcommon.gc, line: 1099\n(defun fact ((x int))\n\n;; get info about a type\ng  > (get-info kernel-context)\n[Type] Name: kernel-context Defined: text from goal_src/kernel/gkernel-h.gc, line: 114\n(deftype kernel-context (basic)\n\n;; get info about a method\ng  > (get-info reset!)\n[Method] Type: collide-sticky-rider-group Method Name: reset! Defined: text from goal_src/engine/collide/collide-shape-h.gc, line: 48\n(defmethod reset! collide-sticky-rider-group ((obj collide-sticky-rider-group))\n[Method] Type: collide-overlap-result Method Name: reset! Defined: text from goal_src/engine/collide/collide-shape-h.gc, line: 94\n(defmethod reset! collide-overlap-result ((obj collide-overlap-result))\n[Method] Type: load-state Method Name: reset! Defined: text from goal_src/engine/level/load-boundary.gc, line: 9\n(defmethod reset! load-state ((obj load-state))\n\n;; get info about a constant\ng  > (get-info TWO_PI)\n[Constant] Name: TWO_PI Value: (the-as float #x40c90fda) Defined: text from goal_src/engine/math/trigonometry.gc, line: 34\n(defconstant TWO_PI (the-as float #x40c90fda))\n\n;; get info about a built-in form\ng  > (get-info asm-file)\n[Built-in Form] asm-file\n")),(0,o.kt)("h3",{id:"autocomplete"},(0,o.kt)("inlineCode",{parentName:"h3"},"autocomplete")),(0,o.kt)("p",null,"Preview the results of the REPL autocomplete:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(autocomplete <sym>)\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"g  > (autocomplete *)\n *\n *16k-dead-pool*\n *4k-dead-pool*\n...\nAutocomplete: 326/1474 symbols matched, took 1.29 ms\n")),(0,o.kt)("h3",{id:"seval"},(0,o.kt)("inlineCode",{parentName:"h3"},"seval")),(0,o.kt)("p",null,"Execute GOOS code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(seval form...)\n")),(0,o.kt)("p",null,"Evaluates the forms in the GOOS macro language. The result is not returned in any way, so it's only useful for getting side effects.  It's not really used other than to bootstrap some GOAL macros for creating macros."),(0,o.kt)("h3",{id:"asm-file"},(0,o.kt)("inlineCode",{parentName:"h3"},"asm-file")),(0,o.kt)("p",null,"Compile a file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},'(asm-file "file-name" [:color] [:write] [:load] [:no-code])\n')),(0,o.kt)("p",null,"This runs the compiler on a given file. The file path is relative to the ",(0,o.kt)("inlineCode",{parentName:"p"},"jak-project")," folder. These are the options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":color"),": run register allocation and code generation. Can be omitted if you don't want actually generate code. Usually you want this option."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":write"),": write the object file to the ",(0,o.kt)("inlineCode",{parentName:"li"},"out/obj")," folder. You must also have ",(0,o.kt)("inlineCode",{parentName:"li"},":color")," on. You must do this to include this file in a DGO."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":load"),": send the object file to the target with the listener. Requires ",(0,o.kt)("inlineCode",{parentName:"li"},":color")," but not ",(0,o.kt)("inlineCode",{parentName:"li"},":write"),". There may be issues with ",(0,o.kt)("inlineCode",{parentName:"li"},":load"),"ing very large object files (believed fixed)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":disassemble"),": prints a disassembly of the code by function.  Currently data is not disassebmled. This code is not linked so references to symbols will have placeholder values like ",(0,o.kt)("inlineCode",{parentName:"li"},"0xDEADBEEF"),".  The IR is printed next to each instruction so you can see what symbol is supposed to be linked. Requires ",(0,o.kt)("inlineCode",{parentName:"li"},":color"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":no-code"),": checks that the result of processing the file generates no code or data. This will be true if your file contains only macros / constant definition. The ",(0,o.kt)("inlineCode",{parentName:"li"},"goal-lib.gc")," file that is loaded by the compiler automatically when it starts must generate no code. You can use ",(0,o.kt)("inlineCode",{parentName:"li"},'(asm-file "goal_src/goal-lib.gc" :no-code)')," to reload this file and double check that it doesn't generate code.")),(0,o.kt)("p",null,"To reduce typing, there are some useful macros:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'(m "filename")'),' is "make" and does a ',(0,o.kt)("inlineCode",{parentName:"li"},":color")," and ",(0,o.kt)("inlineCode",{parentName:"li"},":write"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'(ml "filename")'),' is "make and load" and does a ',(0,o.kt)("inlineCode",{parentName:"li"},":color")," and ",(0,o.kt)("inlineCode",{parentName:"li"},":write")," and ",(0,o.kt)("inlineCode",{parentName:"li"},":load"),". This effectively replaces the previous version of file in the currently running game with the one you just compiled, and is a super useful tool for quick debugging/iterating."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'(md "filename")'),' is "make debug" and does a ',(0,o.kt)("inlineCode",{parentName:"li"},":color"),", ",(0,o.kt)("inlineCode",{parentName:"li"},":write"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},":disassemble"),". It is quite useful for working on the compiler and seeing what code is output."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"(build-game)")," does ",(0,o.kt)("inlineCode",{parentName:"li"},"m")," on all game files and rebuilds DGOs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"(blg)")," (build and load game) does ",(0,o.kt)("inlineCode",{parentName:"li"},"build-game")," then sends commands to load KERNEL and GAME CGOs. The load is done through DGO loading, not ",(0,o.kt)("inlineCode",{parentName:"li"},":load"),"ing individual object files.")),(0,o.kt)("h3",{id:"asm-data-file"},(0,o.kt)("inlineCode",{parentName:"h3"},"asm-data-file")),(0,o.kt)("p",null,"Build a data file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},'(asm-data-file tool-name "file-name")\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tool-name")," refers to which data building tool should be used. For example, this should be ",(0,o.kt)("inlineCode",{parentName:"p"},"game-text")," when building the game text data files."),(0,o.kt)("p",null,"There's a macro ",(0,o.kt)("inlineCode",{parentName:"p"},"(build-data)")," which rebuilds everything."),(0,o.kt)("h3",{id:"gs"},(0,o.kt)("inlineCode",{parentName:"h3"},"gs")),(0,o.kt)("p",null,"Enter a GOOS REPL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(gs)\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scheme"},"g> (gs)\ngoos> (+ 1 2 3)\n6\ngoos> (exit)\n()\n")),(0,o.kt)("p",null,"mainly useful for debugging/trying things out in GOOS. The GOOS REPL shares its environment with the GOOS interpreter used by the compiler, so you can inspect/modify things for debugging with this. Likely not used much outside of initial debugging."),(0,o.kt)("h3",{id:"set-config"},(0,o.kt)("inlineCode",{parentName:"h3"},"set-config!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(set-config! config-name config-value)\n")),(0,o.kt)("p",null,"Used to set compiler configuration. This is mainly for debugging the compiler and enabling print statements. There is a ",(0,o.kt)("inlineCode",{parentName:"p"},"(db)")," macro which sets all the configuration options for the compiler to print as much debugging info as possible. Not used often."),(0,o.kt)("h3",{id:"in-package"},(0,o.kt)("inlineCode",{parentName:"h3"},"in-package")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(in-package stuff...)\n")),(0,o.kt)("p",null,"The compiler ignores this. GOAL files evidently start with this for some reason related to emacs."),(0,o.kt)("h3",{id:"build-dgos"},(0,o.kt)("inlineCode",{parentName:"h3"},"build-dgos")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},'(build-dgos "path to dgos description file")\n')),(0,o.kt)("p",null,"Builds all the DGO files described in the DGO description file. See ",(0,o.kt)("inlineCode",{parentName:"p"},"goal_src/builds/dgos.txt")," for an example. This just packs existing things into DGOs - you must have already built all the dependencies."),(0,o.kt)("p",null,"In the future, this may become part of ",(0,o.kt)("inlineCode",{parentName:"p"},"asm-data-file"),"."),(0,o.kt)("h3",{id:"add-macro-to-autocomplete"},(0,o.kt)("inlineCode",{parentName:"h3"},"add-macro-to-autocomplete")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lisp"},"(add-macro-to-autocomplete macro-name)\n")),(0,o.kt)("p",null,"Makes the given name show up as a macro in the GOAL REPL. Generating macros may be done programmatically using GOOS and this form can be used to make these show up in the autocomplete. This also makes the macro known to ",(0,o.kt)("inlineCode",{parentName:"p"},"get-info")," which will report that the macro was defined at the location where the macro which expanded to ",(0,o.kt)("inlineCode",{parentName:"p"},"add-macro-to-autocomplete")," is located in GOAL code.  This is used internally by ",(0,o.kt)("inlineCode",{parentName:"p"},"defmacro"),"."))}m.isMDXComponent=!0}}]);
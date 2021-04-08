(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{127:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),o=(t(0),t(166)),i={id:"gang_scheduling",title:"Gang Scheduling"},s={unversionedId:"user_guide/gang_scheduling",id:"user_guide/gang_scheduling",isDocsHomePage:!1,title:"Gang Scheduling",description:"\x3c!--",source:"@site/docs/user_guide/gang_scheduling.md",slug:"/user_guide/gang_scheduling",permalink:"/docs/next/user_guide/gang_scheduling",version:"current",sidebar:"docs",previous:{title:"Resource Quota Management",permalink:"/docs/next/user_guide/resource_quota_management"},next:{title:"Run Spark Jobs",permalink:"/docs/next/user_guide/workloads/run_spark"}},l=[{value:"What is Gang Scheduling",id:"what-is-gang-scheduling",children:[]},{value:"Enable Gang Scheduling",id:"enable-gang-scheduling",children:[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"App Configuration",id:"app-configuration",children:[]},{value:"Enable Gang scheduling for Spark jobs",id:"enable-gang-scheduling-for-spark-jobs",children:[]}]},{value:"Verify Configuration",id:"verify-configuration",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],c={rightToc:l};function p(e){var n=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-gang-scheduling"},"What is Gang Scheduling"),Object(o.b)("p",null,"When Gang Scheduling is enabled, YuniKorn schedules the app only when\nthe app\u2019s minimal resource request can be satisfied. Otherwise, apps\nwill be waiting in the queue. Apps are queued in hierarchy queues,\nwith gang scheduling enabled, each resource queue is assigned with the\nmaximum number of applications running concurrently with min resource guaranteed."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Gang Scheduling",src:t(247).default})),Object(o.b)("h2",{id:"enable-gang-scheduling"},"Enable Gang Scheduling"),Object(o.b)("p",null,"There is no cluster-wide configuration needed to enable Gang Scheduling.\nThe scheduler actively monitors the metadata of each app, if the app has included\na valid taskGroups definition, it will be considered as gang scheduling desired."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Task Group")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"A task group is a \u201cgang\u201d of tasks in an app, these tasks are having the same resource profile\nand the same placement constraints. They are considered as homogeneous requests that can be\ntreated as the same kind in the scheduler."))),Object(o.b)("h3",{id:"prerequisite"},"Prerequisite"),Object(o.b)("p",null,"For the queues which runs gang scheduling enabled applications, the queue sorting policy needs to be set either\n",Object(o.b)("inlineCode",{parentName:"p"},"FIFO")," or ",Object(o.b)("inlineCode",{parentName:"p"},"StateAware"),". To configure queue sorting policy, please refer to doc: ",Object(o.b)("a",{parentName:"p",href:"/docs/next/user_guide/sorting_policies#Application_sorting"},"app sorting policies"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Why FIFO based sorting policy?")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When Gang Scheduling is enabled, the scheduler proactively reserves resources\nfor each application. If the queue sorting policy is not FIFO based (StateAware is FIFO based sorting policy),\nthe scheduler might reserve partial resources for each app and causing resource segmentation issues."))),Object(o.b)("h3",{id:"app-configuration"},"App Configuration"),Object(o.b)("p",null,"On Kubernetes, YuniKorn discovers apps by loading metadata from individual pod, the first pod of the app\nis required to enclosed with a full copy of app metadata. If the app doesn\u2019t have any notion about the first or second pod,\nthen all pods are required to carry the same taskGroups info. Gang scheduling requires taskGroups definition,\nwhich can be specified via pod annotations. The required fields are:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Annotation"),Object(o.b)("th",{parentName:"tr",align:null},"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"yunikorn.apache.org/task-group-name"),Object(o.b)("td",{parentName:"tr",align:null},"Task group name, it must be unique within the application")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"yunikorn.apache.org/task-groups"),Object(o.b)("td",{parentName:"tr",align:null},"A list of task groups, each item contains all the info defined for the certain task group")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"yunikorn.apache.org/schedulingPolicyParameters"),Object(o.b)("td",{parentName:"tr",align:null},"Optional. A arbitrary key value pairs to define scheduling policy parameters. Please read ",Object(o.b)("a",{parentName:"td",href:"#scheduling-policy-parameters"},"schedulingPolicyParameters section"))))),Object(o.b)("h4",{id:"how-many-task-groups-needed"},"How many task groups needed?"),Object(o.b)("p",null,"This depends on how many different types of pods this app requests from K8s. A task group is a \u201cgang\u201d of tasks in an app,\nthese tasks are having the same resource profile and the same placement constraints. They are considered as homogeneous\nrequests that can be treated as the same kind in the scheduler. Use Spark as an example, each job will need to have 2 task groups,\none for the driver pod and the other one for the executor pods."),Object(o.b)("h4",{id:"how-to-define-task-groups"},"How to define task groups?"),Object(o.b)("p",null,"The task group definition is a copy of the app\u2019s real pod definition, values for fields like resources, node-selector\nand toleration should be the same as the real pods. This is to ensure the scheduler can reserve resources with the\nexact correct pod specification."),Object(o.b)("h4",{id:"scheduling-policy-parameters"},"Scheduling Policy Parameters"),Object(o.b)("p",null,"Scheduling policy related configurable parameters. Apply the parameters in the following format in pod's annotation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'annotations:\n   yunikorn.apache.org/schedulingPolicyParameters: "PARAM1=VALUE1 PARAM2=VALUE2 ..."\n')),Object(o.b)("p",null,"Currently, the following parameters are supported:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"placeholderTimeoutInSeconds")),Object(o.b)("p",null,"Default value: ",Object(o.b)("em",{parentName:"p"},"15 minutes"),".\nThis parameter defines the reservation timeout for how long the scheduler should wait until giving up allocating all the placeholders.\nThe timeout timer starts to tick when the scheduler ",Object(o.b)("em",{parentName:"p"},"allocates the first placeholder pod"),". This ensures if the scheduler\ncould not schedule all the placeholder pods, it will eventually give up after a certain amount of time. So that the resources can be\nfreed up and used by other apps. If non of the placeholders can be allocated, this timeout won't kick-in. To avoid the placeholder\npods stuck forever, please refer to ",Object(o.b)("a",{parentName:"p",href:"/docs/next/user_guide/trouble_shooting#gang-scheduling"},"troubleshooting")," for solutions."),Object(o.b)("p",null,"More scheduling parameters will added in order to provide more flexibility while scheduling apps."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("p",null,"The following example is a yaml file for a job. This job launches 2 pods and each pod sleeps 30 seconds.\nThe notable change in the pod spec is ",Object(o.b)("em",{parentName:"p"},"spec.template.metadata.annotations"),", where we defined ",Object(o.b)("inlineCode",{parentName:"p"},"yunikorn.apache.org/task-group-name"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"yunikorn.apache.org/task-groups"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: gang-scheduling-job-example\nspec:\n  completions: 2\n  parallelism: 2\n  template:\n    metadata:\n      labels:\n        app: sleep\n        applicationId: "gang-scheduling-job-example"\n        queue: root.sandbox\n      annotations:\n        yunikorn.apache.org/task-group-name: task-group-example\n        yunikorn.apache.org/task-groups: |-\n          [{\n              "name": "task-group-example",\n              "minMember": 2,\n              "minResource": {\n                "cpu": "100m",\n                "memory": "50M"\n              },\n              "nodeSelector": {},\n              "tolerations": []\n          }]\n    spec:\n      schedulerName: yunikorn\n      restartPolicy: Never\n      containers:\n        - name: sleep30\n          image: "alpine:latest"\n          command: ["sleep", "30"]\n          resources:\n            requests:\n              cpu: "100m"\n              memory: "50M"\n')),Object(o.b)("p",null,"When this job is submitted to Kubernetes, 2 pods will be created using the same template, and they all belong to one taskGroup:\n",Object(o.b)("em",{parentName:"p"},"\u201ctask-group-example\u201d"),". YuniKorn will create 2 placeholder pods, each uses the resources specified in the taskGroup definition.\nWhen all 2 placeholders are allocated, the scheduler will bind the the real 2 sleep pods using the spot reserved by the placeholders."),Object(o.b)("p",null,"You can add more than one taskGroups if necessary, each taskGroup is identified by the taskGroup name,\nit is required to map each real pod with a pre-defined taskGroup by setting the taskGroup name. Note,\nthe task group name is only required to be unique within an application."),Object(o.b)("h3",{id:"enable-gang-scheduling-for-spark-jobs"},"Enable Gang scheduling for Spark jobs"),Object(o.b)("p",null,"Each Spark job runs 2 types of pods, driver and executor. Hence, we need to define 2 task groups for each job.\nThe annotations for the driver pod looks like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"Annotations:\n  yunikorn.apache.org/schedulingPolicyParameters: \u201cplaceholderTimeoutSeconds=30\u201d\n  yunikorn.apache.org/taskGroupName: \u201cspark-driver\u201d\n  yunikorn.apache.org/taskGroup: \u201c\n    TaskGroups: [\n     {\n       Name: \u201cspark-driver\u201d\n       minMember: 1,\n       minResource: {\n         Cpu: 1,\n         Memory: 2Gi\n       },\n       Node-selector: ...\n       Tolerations: ...\n     },\n      {\n        Name: \u201cspark-executor\u201d,\n        minMember: 10, \n        minResource: {\n          Cpu: 1,\n          Memory: 2Gi\n        }\n      }\n  ]\n  \u201d\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Spark driver and executor pod has memory overhead, that needs to be considered in the taskGroup resources. "))),Object(o.b)("p",null,"For all the executor pods,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"Annotations:\n  # the taskGroup name should match to the names\n  # defined in the taskGroups field\n  yunikorn.apache.org/taskGroupName: \u201cspark-executor\u201d\n")),Object(o.b)("p",null,"Once the job is submitted to the scheduler, the job won\u2019t be scheduled immediately.\nInstead, the scheduler will ensure it gets its minimal resources before actually starting the driver/executors. "),Object(o.b)("h2",{id:"verify-configuration"},"Verify Configuration"),Object(o.b)("p",null,"To verify if the configuration has been done completely and correctly, check the following things:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"When an app is submitted, verify the expected number of placeholders are created by the scheduler.\nIf you define 2 task groups, 1 with minMember 1 and the other with minMember 5, that means we are expecting 6 placeholder\ngets created once the job is submitted."),Object(o.b)("li",{parentName:"ol"},"Verify the placeholder spec is correct. Each placeholder needs to have the same info as the real pod in the same taskGroup.\nCheck field including: namespace, pod resources, node-selector, and toleration."),Object(o.b)("li",{parentName:"ol"},"Verify the placeholders can be allocated on correct type of nodes, and verify the real pods are started by replacing the placeholder pods.")),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("p",null,"Please see the troubleshooting doc when gang scheduling is enabled ",Object(o.b)("a",{parentName:"p",href:"/docs/next/user_guide/trouble_shooting#gang-scheduling"},"here"),"."))}p.isMDXComponent=!0},166:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},h=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,b=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return t?r.a.createElement(b,s(s({ref:n},c),{},{components:t})):r.a.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},247:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/gang_scheduling_iintro-7f458cff1f69a386818aedfbc0443a34.png"}}]);
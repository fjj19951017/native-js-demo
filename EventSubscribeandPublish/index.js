// let listener = {
//     topics: {},
//     subscribe: function(topic, callback) {
//         //首次订阅
//         if(!this.topics[topic]) {
//             this.topics[topic] = {
//                 len: 1,
//                 callback: [callback]
//             }
//         }
//         //非首次订阅
//         else {
//             this.topics[topic].len++;
//             this.topics[topic].callback.push(callback);
//         }
//     },
//     publish: function(topic, data) {
//         if(!this.topics[topic]) {
//             return;
//         }
//         else {
//             var i = this.topics[topic].len;
//             while(i) {
//                 this.topics[topic].callback[i-1](data);
//                 i--;
//             }
//         }
//     }
// }
//
// //定义callback
// function showData(msg) {
//     console.log(msg);
// }
//
// //订阅
// listener.subscribe('click', showData);
// listener.subscribe('click', showData);
// listener.subscribe('blur', showData);
// listener.subscribe('blur', showData);
//
// console.log(listener.topics)
//
// //发布
// listener.publish('click', 'hello');
// listener.publish('blur', 'bye');

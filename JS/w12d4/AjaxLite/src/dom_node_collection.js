class DomNodeCollection {
    constructor(nodes) {
        this.nodes = nodes
    }
    empty(){
        this.html('');
    }

    remove(){
        this.nodes.forEach(node => {
            node.parentNode.removeChild(node)
        });
    }

    attr(attributeName, value){
        if (typeof value === 'string'){
            this.nodes.forEach(node => {
                node.setAttribute(attributeName, value);
            });
        } else {
            return this.nodes[0].getAttribute(attributeName);       
        };
    }   

    addClass(className){
        this.nodes.forEach(node => {
            node.classList.add(className)
        });
    }
    
    removeClass(className){
        this.nodes.forEach(node => {
            node.classList.remove(className)
        });
    }

    html(arg){
        if (typeof arg === 'string') {
            this.forEach(node => {
                node.innerHTML =  arg;
            });  
        } else {
            // this.nodes.innerHtml = this.node[0]
            return this.nodes[0].innerHtml;
        };   
    }

    find(selector){
        let collectedNodes = [];
        this.nodes.forEach(node => {
            const nodesList = node.querySelectorAll(selector);
            collectedNodes.push(Array.from(nodesList));
        });
        return new DomNodeCollection(collectedNodes);
    }
//     //const foo = document.getElementById('foo');
// for (let i = 0; i < foo.children.length; i++) {
//     console.log(foo.children[i].tagName);
//   }
    children(){
        this.nodes.forEach(node => {
            const myChildren = node.children
        });
        return new DomNodeCollection(Array.from(myChildren))
    }

    parent(){
        const myParents = [];
        this.nodes.forEach(node => {
            myParents = node.parentNode
        });
        return new DomNodeCollection(Array.from(myParents))
        
    }

    append(args){
        if (typeof args === 'string') {
            this.nodes.forEach(node =>{
                this.innerHTML += args
            });
        }else if (args instanceof DomNodeCollection){
            this.nodes.forEach(node =>{
                this.args.nodes.forEach(argNode =>{
                    // this.innerHTML += args
                    node.appendChild(argNode);
                });
            });
        }else {
            args = $l(args);
        };
    };

// the on method will have to store the callback as an attribute on the node
// event handler should be registered for every element in the node array
// n't worry about event delegation
// syntax target.addEventListener(type, listener[options])
    on(event, callback){
        this.nodes.forEach(node => {
            node.addEventListener(event, callback);
            // node is hash?
            node[event].push(callback)
        });
    };

    // element.addEventListener("mousedown", handleMouseDown, {passive: true
    
    off(event){
        this.nodes.forEach(node => {
            if(node[event]){
                const cb = node[event]
                node.removeEventListener(event, cb)
            }
               
        });
    }

}

module.exports = DomNodeCollection;
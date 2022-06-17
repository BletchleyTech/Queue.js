# **Queue**

Queue provides a simple JavaScript-native implementation of the queue data structure.

## **Installation**

Using npm:

```shell
$ npm install @bletchley-tech/queue
```

## **Usage**

Queue provides a JavaScript-native implementation of the queue data structure designed for use in a synchronous Node.js environment.

The package provides a single class, Queue, which is a simple queue data structure. To use it, follow the next steps:

1) Import/Require the package:

    ```javascript
    // CommonJS
    const Queue = require('queue');

    // ES6+
    import Queue from 'queue';
    ```

    This will load the Queue class into the global namespace and allow you to create new instances of Queue.

2) Create a new instance of Queue:

    ```javascript
    const queue = new Queue();
    ```

    This will create a new instance of Queue and store it in the queue variable.

3) Use the queue:

    ```javascript
    queue.enqueue(1); // Enqueue 1
    queue.size; // 1
    queue.isEmpty; // false
    queue.queue; // '1'
    ```

    This will enqueue 1. Enqueueing a value will add it to the end of the queue, and automatically update the size.

## **Queue Class**

The Queue class has only one property, queue, which is an array of values. The specific functinoality of the Queue data structure is provided through class methods.

The Queue class takes advantage of the new private class properties/methods JavaScript feature introduced in ES2022. This means that once the Queue is initialized, it will not be able to be changed except by the class' own methods.

#### **Constructor**

The Queue class has a constructor that takes either one or no arguments. 

If no arguments are passed, the constructor returns a new, empty Queue instance. 

If one argument is passed, the constructor acts as a copy constructor. This means the passed argument must be an instance of Queue, to be copied into a new instance which will be returned by the constructor.

```javascript
const queue = new Queue(); // Create a new empty Queue
queue.enqueueMany(5, 1, 9); // Enqueue 5, 1, 9

const queue2 = new Queue(queue); // Create a new Queue (queue2) with the same values as queue
```

### **Class Methods**

#### *enqueue(value)*

The enqueue method adds a value to the end of the queue.

```javascript
queue.enqueue(1); // Enqueue 1
```

#### *enqueueMany(values)*

The enqueueMany method adds multiple values to the end of the queue.

```javascript
queue.enqueueMany(1, 2, 3); // Enqueue 1, 2, 3
```

#### *dequeue*()

The dequeue method removes the value at the front of the queue.

```javascript
queue.dequeue(); // Dequeue 1
```

### **Class Attributes**

#### *size* 

```javascript
queue.size; // 2
```

This will return the size of the queue.

#### *isEmpty* 

```javascript
queue.isEmpty; // false
```

This will return true if the queue is empty, false otherwise.

#### *front* 

```javascript
queue.front; // 2
```

This will return the value at the front of the queue.

#### *queue* 

```javascript
queue.queue; // '2 - 3'
```

This will return the queue as a string.

#### *type*

```javascript
queue.type; // 'number'
```

## License

Queue is licensed under the MIT license (see the [LICENSE](LICENSE) file for more information).
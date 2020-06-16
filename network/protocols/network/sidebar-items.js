initSidebarItems({"enum":[["Event","Events received by network clients in a validator"]],"struct":[["NetworkEvents","A `Stream` of `Event<TMessage>` from the lower network layer to an upper network application that deserializes inbound network direct-send and rpc messages into `TMessage`."],["NetworkSender","`NetworkSender` is the generic interface from upper network applications to the lower network layer. It provides the full API for network applications, including sending direct-send messages, sending rpc requests, as well as dialing or disconnecting from peers and updating the list of accepted public keys."]],"trait":[["Message",""],["NewNetworkEvents","Trait specifying the signature for `new()` `NetworkEvents`"],["NewNetworkSender","Trait specifying the signature for `new()` `NetworkSender`s"]]});
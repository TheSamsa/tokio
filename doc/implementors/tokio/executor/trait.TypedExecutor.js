(function() {var implementors = {};
implementors["tokio"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"tokio/executor/trait.TypedExecutor.html\" title=\"trait tokio::executor::TypedExecutor\">TypedExecutor</a>&lt;T&gt; for <a class=\"struct\" href=\"tokio/runtime/current_thread/struct.Handle.html\" title=\"struct tokio::runtime::current_thread::Handle\">Handle</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/prelude/trait.Future.html\" title=\"trait tokio::prelude::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio::runtime::current_thread::runtime::Handle"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"tokio/executor/trait.TypedExecutor.html\" title=\"trait tokio::executor::TypedExecutor\">TypedExecutor</a>&lt;T&gt; for <a class=\"struct\" href=\"tokio/runtime/struct.TaskExecutor.html\" title=\"struct tokio::runtime::TaskExecutor\">TaskExecutor</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/prelude/trait.Future.html\" title=\"trait tokio::prelude::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio::runtime::threadpool::task_executor::TaskExecutor"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()

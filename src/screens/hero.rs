use dioxus::{core_macro::{component, rsx}, dioxus_core::Element};
use crate::dioxus_elements::div;
#[component]
pub fn Hero() -> Element {

    rsx! {
        
        div {
            class:"bg-slate-500",
            h1 {class:"text-center", "High-Five counter: {count}" }
            button { onclick: move |_| count += 1, "Up high!" }
            button { onclick: move |_| count -= 1, "Down low!" }
        }
    }
}

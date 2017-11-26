pub fn reply(message: &str) -> &str {
    let phrase = message.trim();
    match phrase {
        "" => "Fine. Be that way!",
        _ if is_all_caps(phrase) => "Whoa, chill out!",
        _ if phrase.ends_with('?') => "Sure.",
        _ => "Whatever."
    }

}


fn is_all_caps(message: &str) -> bool {
    message == message.to_uppercase() && message.to_lowercase() != message.to_uppercase()
}
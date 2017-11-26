pub fn verse(n: i32) -> String {
    format!("{} of beer on the wall, {} of beer.\n{}, {} of beer on the wall.\n", 
        number_to_beers(n), 
        number_to_beers(n).to_lowercase(), 
        buy_or_grab(n-1), 
        number_to_beers(n-1).to_lowercase()
    )
}

pub fn sing(start: i32, end: i32) -> String {
    let mut x = start;
    let mut output: String = String::new();
    while x != end - 1 {
        output += &verse(x);
        if x != end {
            output += "\n";
        } 
        x -= 1;
    }
    output
}

fn number_to_beers(n: i32) -> String{
    match n  {
        0 => "No more bottles".to_string(),
        1 => "1 bottle".to_string(),
        -1 => "99 bottles".to_string(),
        _ => format!("{} bottles", n).to_string()
    }
}

fn buy_or_grab(n: i32) -> String{
    match n {
        -1 => "Go to the store and buy some more".to_string(),
        0 => "Take it down and pass it around".to_string(),
        _ => "Take one down and pass it around".to_string()
    }
}
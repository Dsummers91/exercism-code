pub fn build_proverb(list: Vec<&str>) -> String {
    let mut proverb_list = list.clone();
    proverb_list.reverse();
    let mut item = proverb_list.pop();
    let mut output = String::new();
    
    while proverb_list.last().is_some() && proverb_list.len() > 0 {
        let line = format!("For want of a {} the {} was lost.\n", item.unwrap(), proverb_list.last().unwrap());
        item = proverb_list.pop();
        output = output + &line;
    }
    if list.capacity() > 0 {
        let final_line = format!("And all for the want of a {}.", list[0]);
        output = output + &final_line;
    }
    output
}
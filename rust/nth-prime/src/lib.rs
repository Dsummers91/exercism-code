extern crate primal;

use primal::Primes;

pub fn nth(n: usize) -> Result<usize, &'static str> {
  match n  {
    0 => Err("error"),
    _ => Ok(Primes::all().nth(n-1).unwrap()),
  }
}
// #![cfg_attr(not(feature = "std"), no_std)]

// use ink_lang as ink;

// #[ink::contract]
// mod web3 {

//     /// Defines the storage of your contract.
//     /// Add new fields to the below struct in order
//     /// to add new static storage fields to your contract.
//     #[ink(storage)]
//     pub struct Web3 {
//         /// Stores a single `bool` value on the storage.
//         value: bool,
//     }

//     impl Web3 {
//         /// Constructor that initializes the `bool` value to the given `init_value`.
//         #[ink(constructor)]
//         pub fn new(init_value: bool) -> Self {
//             Self { value: init_value }
//         }

//         /// Constructor that initializes the `bool` value to `false`.
//         ///
//         /// Constructors can delegate to other constructors.
//         #[ink(constructor)]
//         pub fn default() -> Self {
//             Self::new(Default::default())
//         }

//         /// A message that can be called on instantiated contracts.
//         /// This one flips the value of the stored `bool` from `true`
//         /// to `false` and vice versa.
//         #[ink(message)]
//         pub fn flip(&mut self) {
//             self.value = !self.value;
//         }

//         /// Simply returns the current value of our `bool`.
//         #[ink(message)]
//         pub fn get(&self) -> bool {
//             self.value
//         }
//     }

//     /// Unit tests in Rust are normally defined within such a `#[cfg(test)]`
//     /// module and test functions are marked with a `#[test]` attribute.
//     /// The below code is technically just normal Rust code.
//     #[cfg(test)]
//     mod tests {
//         /// Imports all the definitions from the outer scope so we can use them here.
//         use super::*;

//         /// Imports `ink_lang` so we can use `#[ink::test]`.
//         use ink_lang as ink;

//         /// We test if the default constructor does its job.
//         #[ink::test]
//         fn default_works() {
//             let web3 = Web3::default();
//             assert_eq!(web3.get(), false);
//         }

//         /// We test a simple use case of our contract.
//         #[ink::test]
//         fn it_works() {
//             let mut web3 = Web3::new(false);
//             assert_eq!(web3.get(), false);
//             web3.flip();
//             assert_eq!(web3.get(), true);
//         }
//     }
// }
use ink_lang as ink;

#[ink::contract]
mod flipper {
    /// The storage of the flipper contract.
    #[ink(storage)]
    pub struct Flipper {
        /// The single `bool` value.
        value: bool,
    }

    impl Flipper {
        /// Instantiates a new Flipper contract and initializes
        /// `value` to `init_value`.
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self {
                value: init_value,
            }
        }

        /// Flips `value` from `true` to `false` or vice versa.
        #[ink(message)]
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        /// Returns the current state of `value`.
        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
        }
    }

    /// Simply execute `cargo test` in order to test your contract
    /// using the below unit tests.
    #[cfg(test)]
    mod tests {
        use super::*;
        use ink_lang as ink;

        #[ink::test]
        fn it_works() {
            let mut flipper = Flipper::new(false);
            assert_eq!(flipper.get(), false);
            flipper.flip();
            assert_eq!(flipper.get(), true);
        }
    }
}
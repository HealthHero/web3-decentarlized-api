rustup component add rust-src --toolchain nightly

rustup target add wasm32-unknown-unknown --toolchain nightly

cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git --tag v0.3.0 --force --locked

brew install binaryen

cargo install cargo-contract --vers ^0.16 --force --locked



// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(
        address from,
        address reciever,
        uint256 amount,
        string message,
        uint256 timestamp
    );

    struct TransferStruct {
        address sender;
        address reciever;
        uint256 amount;
        string message;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable reciever,
        uint256 amount,
        string memory message
    ) public {
        transactionCount += 1;

        transactions.push(
            TransferStruct(
                msg.sender,
                reciever,
                amount,
                message,
                block.timestamp
            )
        );

        emit Transfer(
            msg.sender,
            reciever,
            amount,
            message,
            block.timestamp
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        // return transations;
    }

    function getTransactionCount() public view returns (uint256) {
        // return transactionCount;
    }
}

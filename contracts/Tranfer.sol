pragma solidity ^0.8.18;

contract Transfer {
    //gửi cho 1 địa chỉ
    function transferEther(address payable recipient) external payable {
        require(msg.value > 0, "No Ether sent");
        recipient.transfer(msg.value);
    }
    // gửi cho nhiều địa chỉ 
      function transferEtherMany(address payable[] memory recipients, uint256 amount) external payable {
        // require(msg.value >= amount * recipients.length, "Insufficient Ether sent");
        for (uint256 i = 0; i < recipients.length; i++) {
            recipients[i].transfer(amount);
        }
    }
    
}

const cardService = require('../service/cardService');
const express = require('express');
const router = express.Router();
// const jwt  = require('josnwebtoken');


router.post('/addcard',async(req,res) => {
    try{
     const card_to_add = req.body;
     const addCardRes = await cardService.createCard(card_to_add);
     if(res.statusCode === 200 && addCardRes){
       return  res.send("card created");
     }
     else{
       return res.status(400).send("Invalid Payload / Something went wrong");
     }

    }
    catch(err){
       return res.status(500).send(err);
    }
})



router.get('/viewcards',async(req,res) => {
    try{
     
     const CardRes = await cardService.viewCards();
          if(res.statusCode === 200 && CardRes.length > 0){
       return  res.json(CardRes);
     }
     else{
       return res.status(400).send("No cards available to view");
     }

    }
    catch(err){
       return res.status(500).send("Error occured while fetching cards view");
    }
})

router.get('/viewcardsbyduedate',async(req,res) => {
    try{
     
     const sortedCards = await cardService.viewCardsByDueDate();
          if(res.statusCode === 200 && sortedCards.length > 0){
       return  res.json(sortedCards);
     }
     else{
       return res.status(400).send("No cards available to view");
     }

    }
    catch(err){
       return res.status(500).send("Error occured while fetching cards view");
    }
})


router.delete(':cardid/deletecard',async(req,res) => {
    try{
       const card_id_to_remove = req.params.cardid;
     const removeCard = await cardService.deleteCard(card_id_to_remove)
          if(res.statusCode === 200 && removeCard){
       return  res.send("Card Deleted");
     }
     else{
       return res.status(400).send("No card found with given card id");
     }

    }
    catch(err){
       return res.status(500).send("Error occured while deleting card");
    }
})



router.put(':card_id/updatecard',async(req,res) => {
    try{
       const card_id_to_update = req.params.card_id;
       const cardDetails = req.body;
     const updateCard = await cardService.updateCard(card_id_to_update,cardDetails);
          if(res.statusCode === 200 && updateCard){
       return  res.send("Card Details updated");
     }
     else{
       return res.status(400).send("No card found with given card id / Updated failed");
     }

    }
    catch(err){
       return res.status(500).send("Error occured while updating  card");
    }
})

module.exports = router;
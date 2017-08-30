var statusENUMS={
    COMPLETE:"COMPLETE",
    ACTIVE:"ACTIVE",
    DELETE:"DELETE"
};
var todos={
    1:{title:"learn javascript" ,status:statusENUMS.ACTIVE},
    2:{title:"understand Git" ,status:statusENUMS.ACTIVE},
    3:{title:"intractive Git" ,status:statusENUMS.ACTIVE}
};
var next_todo_id=4;
module.exports={
    statusENUMS:statusENUMS,
    todos:todos,
    next_todo_id:next_todo_id
};
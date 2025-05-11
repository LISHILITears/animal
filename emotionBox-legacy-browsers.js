/******************* 
 * Emotionbox Test *
 *******************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('#7CE1FF'),
  units: 'norm',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'emotionBox';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(TrainingInstructionsRoutineBegin());
flowScheduler.add(TrainingInstructionsRoutineEachFrame());
flowScheduler.add(TrainingInstructionsRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(endingRoutineBegin());
flowScheduler.add(endingRoutineEachFrame());
flowScheduler.add(endingRoutineEnd());
flowScheduler.add(feedbackRoutineBegin());
flowScheduler.add(feedbackRoutineEachFrame());
flowScheduler.add(feedbackRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Stimuli/treasureChest.png', 'path': 'Stimuli/treasureChest.png'},
    {'name': 'Stimuli/musicNote.png', 'path': 'Stimuli/musicNote.png'},
    {'name': 'Stimuli/confettiTwoCoins.mp4', 'path': 'Stimuli/confettiTwoCoins.mp4'},
    {'name': 'Stimuli/sadness.wav', 'path': 'Stimuli/sadness.wav'},
    {'name': 'Stimuli/anger.wav', 'path': 'Stimuli/anger.wav'},
    {'name': 'Stimuli/animationbeaver.mp4', 'path': 'Stimuli/animationbeaver.mp4'},
    {'name': 'Stimuli/animationcow.mp4', 'path': 'Stimuli/animationcow.mp4'},
    {'name': 'emotionBox.xlsx', 'path': 'emotionBox.xlsx'},
    {'name': 'Stimuli/snowballdance.mp4', 'path': 'Stimuli/snowballdance.mp4'},
    {'name': 'Stimuli/happiness.wav', 'path': 'Stimuli/happiness.wav'},
    {'name': 'Stimuli/bar.png', 'path': 'Stimuli/bar.png'},
    {'name': 'Stimuli/endingConfetti.mp4', 'path': 'Stimuli/endingConfetti.mp4'},
    {'name': 'Stimuli/animationdog.mp4', 'path': 'Stimuli/animationdog.mp4'},
    {'name': 'Stimuli/tenderness.wav', 'path': 'Stimuli/tenderness.wav'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.6';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var TrainingInstructionsClock;
var text_2;
var trainingInstructions;
var mouse_5;
var notes_training;
var randint;
var points_r1;
var maxpoint_r1;
var instructionsClock;
var mouse_2;
var instruc;
var coins;
var readyClock;
var note;
var clickNote;
var mouse_6;
var trialClock;
var sound_1;
var mouse_4;
var respVeryBad;
var respLittleBad;
var respNormal;
var respLittleGood;
var respVeryGood;
var coins_3Clock;
var coinCollectClock;
var coinCollect;
var endingClock;
var movieClock;
var movie;
var mouse;
var thankyou;
var greatjob;
var feedbackClock;
var coinsCollectedClock;
var coinsCollected;
var mouse_7;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "TrainingInstructions"
  TrainingInstructionsClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Training Phase',
    font: 'abadi',
    units: undefined, 
    pos: [0, 0.5], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  trainingInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'trainingInstructions',
    text: 'How to play the game: \n\nListen to the music and help us decide where the animal belongs!\n',
    font: 'abadi',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  notes_training = new visual.ImageStim({
    win : psychoJS.window,
    name : 'notes_training', units : undefined, 
    image : 'Stimuli/bar.png', mask : undefined,
    ori : 0, pos : [0, (- 0.6)], size : [0.6, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  randint = function(min, maxplusone) {
    return Math.floor(Math.random() * (maxplusone - min) ) + min;
  }
  
  
  points_r1 = 0
  maxpoint_r1 = 3
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  instruc = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruc',
    text: '\nHow to play the game: \n\nListen to the music and help us decide how the animal is feeling! \n\nCollect coins along the way and win a prize at the end!\n\n\n\n',
    font: 'abadi',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  coins = new visual.ImageStim({
    win : psychoJS.window,
    name : 'coins', units : undefined, 
    image : 'Stimuli/treasureChest.png', mask : undefined,
    ori : 0, pos : [0.75, 0.75], size : [0.2, 0.35],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "ready"
  readyClock = new util.Clock();
  note = new visual.ImageStim({
    win : psychoJS.window,
    name : 'note', units : undefined, 
    image : 'Stimuli/musicNote.png', mask : undefined,
    ori : 0, pos : [(- 0.05), 0.03], size : [0.7, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  clickNote = new visual.TextStim({
    win: psychoJS.window,
    name: 'clickNote',
    text: 'Click the music note when you’re ready!\n',
    font: 'abadi',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_1.setVolume(1);
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  respVeryBad = new visual.Rect ({
    win: psychoJS.window, name: 'respVeryBad', 
    width: [0.25, 0.5][0], height: [0.25, 0.5][1],
    ori: 0, pos: [(- 0.8), (- 0.65)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -3, interpolate: true,
  });
  
  respLittleBad = new visual.Rect ({
    win: psychoJS.window, name: 'respLittleBad', 
    width: [0.25, 0.5][0], height: [0.25, 0.5][1],
    ori: 0, pos: [(- 0.4), (- 0.65)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -4, interpolate: true,
  });
  
  respNormal = new visual.Rect ({
    win: psychoJS.window, name: 'respNormal', 
    width: [0.25, 0.5][0], height: [0.25, 0.5][1],
    ori: 0, pos: [0, (- 0.65)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -5, interpolate: true,
  });
  
  respLittleGood = new visual.Rect ({
    win: psychoJS.window, name: 'respLittleGood', 
    width: [0.25, 0.5][0], height: [0.25, 0.5][1],
    ori: 0, pos: [0.4, (- 0.65)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -6, interpolate: true,
  });
  
  respVeryGood = new visual.Rect ({
    win: psychoJS.window, name: 'respVeryGood', 
    width: [0.25, 0.5][0], height: [0.25, 0.5][1],
    ori: 0, pos: [0.8, (- 0.65)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -7, interpolate: true,
  });
  
  // Initialize components for Routine "coins_3"
  coins_3Clock = new util.Clock();
  coinCollectClock = new util.Clock();
  coinCollect = new visual.MovieStim({
    win: psychoJS.window,
    name: 'coinCollect',
    units: 'norm',
    movie: 'Stimuli/confettiTwoCoins.mp4',
    pos: [0, 0],
    size: [2, 2],
    ori: 0,
    opacity: 1,
    loop: true,
    noAudio: false,
    });
  // Initialize components for Routine "ending"
  endingClock = new util.Clock();
  movieClock = new util.Clock();
  movie = new visual.MovieStim({
    win: psychoJS.window,
    name: 'movie',
    units: 'norm',
    movie: 'Stimuli/snowballdance.mp4',
    pos: [0, (- 0.05)],
    size: [0.7, 1],
    ori: 0,
    opacity: 1,
    loop: true,
    noAudio: false,
    });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  thankyou = new visual.TextStim({
    win: psychoJS.window,
    name: 'thankyou',
    text: 'You did a great job!',
    font: 'Abadi',
    units: undefined, 
    pos: [0, 0.7], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  greatjob = new visual.TextStim({
    win: psychoJS.window,
    name: 'greatjob',
    text: 'Thank you!',
    font: 'Abadi',
    units: undefined, 
    pos: [0, (- 0.7)], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  coinsCollectedClock = new util.Clock();
  coinsCollected = new visual.MovieStim({
    win: psychoJS.window,
    name: 'coinsCollected',
    units: 'norm',
    movie: 'Stimuli/endingConfetti.mp4',
    pos: [0, 0],
    size: [2, 2],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: false,
    });
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var gotValidClick;
var TrainingInstructionsComponents;
function TrainingInstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'TrainingInstructions'-------
    t = 0;
    TrainingInstructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_5
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    TrainingInstructionsComponents = [];
    TrainingInstructionsComponents.push(text_2);
    TrainingInstructionsComponents.push(trainingInstructions);
    TrainingInstructionsComponents.push(mouse_5);
    TrainingInstructionsComponents.push(notes_training);
    
    TrainingInstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var prevButtonState;
var _mouseButtons;
var continueRoutine;
function TrainingInstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'TrainingInstructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TrainingInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *trainingInstructions* updates
    if (t >= 0.0 && trainingInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trainingInstructions.tStart = t;  // (not accounting for frame time here)
      trainingInstructions.frameNStart = frameN;  // exact frame index
      
      trainingInstructions.setAutoDraw(true);
    }

    // *mouse_5* updates
    if (t >= 0.0 && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *notes_training* updates
    if (t >= 0.0 && notes_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      notes_training.tStart = t;  // (not accounting for frame time here)
      notes_training.frameNStart = frameN;  // exact frame index
      
      notes_training.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    TrainingInstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrainingInstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'TrainingInstructions'-------
    TrainingInstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "TrainingInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(mouse_2);
    instructionsComponents.push(instruc);
    instructionsComponents.push(coins);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *instruc* updates
    if (t >= 0.0 && instruc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruc.tStart = t;  // (not accounting for frame time here)
      instruc.frameNStart = frameN;  // exact frame index
      
      instruc.setAutoDraw(true);
    }

    
    // *coins* updates
    if (t >= 0.0 && coins.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      coins.tStart = t;  // (not accounting for frame time here)
      coins.frameNStart = frameN;  // exact frame index
      
      coins.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'emotionBox.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(readyRoutineBegin(snapshot));
    trialsLoopScheduler.add(readyRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(readyRoutineEnd(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(coins_3RoutineBegin(snapshot));
    trialsLoopScheduler.add(coins_3RoutineEachFrame(snapshot));
    trialsLoopScheduler.add(coins_3RoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var readyComponents;
function readyRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ready'-------
    t = 0;
    readyClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_6
    mouse_6.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    readyComponents = [];
    readyComponents.push(note);
    readyComponents.push(clickNote);
    readyComponents.push(mouse_6);
    
    readyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function readyRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ready'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = readyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *note* updates
    if (t >= 0.0 && note.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      note.tStart = t;  // (not accounting for frame time here)
      note.frameNStart = frameN;  // exact frame index
      
      note.setAutoDraw(true);
    }

    
    // *clickNote* updates
    if (t >= 0.0 && clickNote.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickNote.tStart = t;  // (not accounting for frame time here)
      clickNote.frameNStart = frameN;  // exact frame index
      
      clickNote.setAutoDraw(true);
    }

    // *mouse_6* updates
    if (t >= 0.0 && mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_6.tStart = t;  // (not accounting for frame time here)
      mouse_6.frameNStart = frameN;  // exact frame index
      
      mouse_6.status = PsychoJS.Status.STARTED;
      mouse_6.mouseClock.reset();
      prevButtonState = mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [note]) {
            if (obj.contains(mouse_6)) {
              gotValidClick = true;
              mouse_6.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    readyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function readyRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ready'-------
    readyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_6.getPos();
    _mouseButtons = mouse_6.getPressed();
    psychoJS.experiment.addData('mouse_6.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_6.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_6.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_6.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_6.rightButton', _mouseButtons[2]);
    if (mouse_6.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_6.clicked_name', mouse_6.clicked_name[0]);}
    // the Routine "ready" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var animationClock;
var animation;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    animationClock = new util.Clock();
    animation = new visual.MovieStim({
      win: psychoJS.window,
      name: 'animation',
      units: 'norm',
      movie: vid,
      pos: [0, 0],
      size: [2, 2],
      ori: 0,
      opacity: 1,
      loop: false,
      noAudio: false,
      });
    sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: music,
    secs: -1,
    });
    sound_1.setVolume(1);
    // setup some python lists for storing info about the mouse_4
    // current position of the mouse:
    mouse_4.x = [];
    mouse_4.y = [];
    mouse_4.leftButton = [];
    mouse_4.midButton = [];
    mouse_4.rightButton = [];
    mouse_4.time = [];
    mouse_4.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(animation);
    trialComponents.push(sound_1);
    trialComponents.push(mouse_4);
    trialComponents.push(respVeryBad);
    trialComponents.push(respLittleBad);
    trialComponents.push(respNormal);
    trialComponents.push(respLittleGood);
    trialComponents.push(respVeryGood);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *animation* updates
    if (t >= 0.5 && animation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      animation.tStart = t;  // (not accounting for frame time here)
      animation.frameNStart = frameN;  // exact frame index
      
      animation.setAutoDraw(true);
      animation.play();
    }

    // start/stop sound_1
    if (t >= 2.5 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_1.getDuration() + sound_1.tStart)     && sound_1.status === PsychoJS.Status.STARTED) {
      sound_1.stop();  // stop the sound (if longer than duration)
      sound_1.status = PsychoJS.Status.FINISHED;
    }
    // *mouse_4* updates
    if (t >= (sound_1.getDuration() + 0.5) && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_4.getPos();
          mouse_4.x.push(_mouseXYs[0]);
          mouse_4.y.push(_mouseXYs[1]);
          mouse_4.leftButton.push(_mouseButtons[0]);
          mouse_4.midButton.push(_mouseButtons[1]);
          mouse_4.rightButton.push(_mouseButtons[2]);
          mouse_4.time.push(mouse_4.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [respVeryBad, respLittleBad, respNormal, respLittleGood, respVeryGood]) {
            if (obj.contains(mouse_4)) {
              gotValidClick = true;
              mouse_4.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *respVeryBad* updates
    if (t >= 0.0 && respVeryBad.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respVeryBad.tStart = t;  // (not accounting for frame time here)
      respVeryBad.frameNStart = frameN;  // exact frame index
      
      respVeryBad.setAutoDraw(true);
    }

    
    // *respLittleBad* updates
    if (t >= 0.0 && respLittleBad.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respLittleBad.tStart = t;  // (not accounting for frame time here)
      respLittleBad.frameNStart = frameN;  // exact frame index
      
      respLittleBad.setAutoDraw(true);
    }

    
    // *respNormal* updates
    if (t >= 0.0 && respNormal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respNormal.tStart = t;  // (not accounting for frame time here)
      respNormal.frameNStart = frameN;  // exact frame index
      
      respNormal.setAutoDraw(true);
    }

    
    // *respLittleGood* updates
    if (t >= 0.0 && respLittleGood.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respLittleGood.tStart = t;  // (not accounting for frame time here)
      respLittleGood.frameNStart = frameN;  // exact frame index
      
      respLittleGood.setAutoDraw(true);
    }

    
    // *respVeryGood* updates
    if (t >= 0.0 && respVeryGood.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respVeryGood.tStart = t;  // (not accounting for frame time here)
      respVeryGood.frameNStart = frameN;  // exact frame index
      
      respVeryGood.setAutoDraw(true);
    }

    if ((animation.getCurrentFrameTime() >= 7)) {
        animation.pause();
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    animation.stop();
    sound_1.stop();  // ensure sound has stopped at end of routine
    // store data for thisExp (ExperimentHandler)
    if (mouse_4.x) {  psychoJS.experiment.addData('mouse_4.x', mouse_4.x[0])};
    if (mouse_4.y) {  psychoJS.experiment.addData('mouse_4.y', mouse_4.y[0])};
    if (mouse_4.leftButton) {  psychoJS.experiment.addData('mouse_4.leftButton', mouse_4.leftButton[0])};
    if (mouse_4.midButton) {  psychoJS.experiment.addData('mouse_4.midButton', mouse_4.midButton[0])};
    if (mouse_4.rightButton) {  psychoJS.experiment.addData('mouse_4.rightButton', mouse_4.rightButton[0])};
    if (mouse_4.time) {  psychoJS.experiment.addData('mouse_4.time', mouse_4.time[0])};
    if (mouse_4.clicked_name) {  psychoJS.experiment.addData('mouse_4.clicked_name', mouse_4.clicked_name[0])};
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var coins_3Components;
function coins_3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'coins_3'-------
    t = 0;
    coins_3Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(7.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    coins_3Components = [];
    coins_3Components.push(coinCollect);
    
    coins_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var frameRemains;
function coins_3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'coins_3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = coins_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *coinCollect* updates
    if (t >= 0.5 && coinCollect.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      coinCollect.tStart = t;  // (not accounting for frame time here)
      coinCollect.frameNStart = frameN;  // exact frame index
      
      coinCollect.setAutoDraw(true);
      coinCollect.play();
    }

    frameRemains = 0.5 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((coinCollect.status === PsychoJS.Status.STARTED || coinCollect.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      coinCollect.setAutoDraw(false);
    }

    if (coinCollect.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    coins_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function coins_3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'coins_3'-------
    coins_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    coinCollect.stop();
    coinCollect.stop();
    
    return Scheduler.Event.NEXT;
  };
}


var endingComponents;
function endingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ending'-------
    t = 0;
    endingClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    endingComponents = [];
    endingComponents.push(movie);
    endingComponents.push(mouse);
    endingComponents.push(thankyou);
    endingComponents.push(greatjob);
    
    endingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function endingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ending'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie* updates
    if (t >= 0 && movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie.tStart = t;  // (not accounting for frame time here)
      movie.frameNStart = frameN;  // exact frame index
      
      movie.setAutoDraw(true);
      movie.play();
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *thankyou* updates
    if (t >= 0.0 && thankyou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thankyou.tStart = t;  // (not accounting for frame time here)
      thankyou.frameNStart = frameN;  // exact frame index
      
      thankyou.setAutoDraw(true);
    }

    
    // *greatjob* updates
    if (t >= 0.0 && greatjob.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      greatjob.tStart = t;  // (not accounting for frame time here)
      greatjob.frameNStart = frameN;  // exact frame index
      
      greatjob.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ending'-------
    endingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    movie.stop();
    // store data for thisExp (ExperimentHandler)
    // the Routine "ending" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_7
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(coinsCollected);
    feedbackComponents.push(mouse_7);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *coinsCollected* updates
    if (t >= 0.0 && coinsCollected.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      coinsCollected.tStart = t;  // (not accounting for frame time here)
      coinsCollected.frameNStart = frameN;  // exact frame index
      
      coinsCollected.setAutoDraw(true);
      coinsCollected.play();
    }

    // *mouse_7* updates
    if (t >= 0.5 && mouse_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_7.tStart = t;  // (not accounting for frame time here)
      mouse_7.frameNStart = frameN;  // exact frame index
      
      mouse_7.status = PsychoJS.Status.STARTED;
      mouse_7.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_7.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_7.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback'-------
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    coinsCollected.stop();
    // store data for thisExp (ExperimentHandler)
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

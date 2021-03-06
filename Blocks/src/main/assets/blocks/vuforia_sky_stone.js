/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview FTC robot blocks related to Vuforia for SKYSTONE (2019-2020)
 * @author lizlooney@google.com (Liz Looney)
 */

// The following are generated dynamically in HardwareUtil.fetchJavaScriptForHardware():
// vuforiaSkyStoneIdentifierForJavaScript
// createSkyStoneTrackableNameDropdown
// SKY_STONE_TRACKABLE_NAME_TOOLTIPS
// The following are defined in vars.js:
// createNonEditableField
// functionColor
// getPropertyColor

Blockly.Blocks['vuforiaSkyStone_initialize_withCameraDirection'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('VuforiaSKYSTONE'))
        .appendField('.')
        .appendField(createNonEditableField('initialize'));
    this.appendValueInput('CAMERA_DIRECTION').setCheck('VuforiaLocalizer.CameraDirection')
        .appendField('cameraDirection')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('USE_EXTENDED_TRACKING').setCheck('Boolean')
        .appendField('useExtendedTracking')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('ENABLE_CAMERA_MONITORING').setCheck('Boolean')
        .appendField('enableCameraMonitoring')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('CAMERA_MONITOR_FEEDBACK').setCheck('VuforiaLocalizer.Parameters.CameraMonitorFeedback')
        .appendField('cameraMonitorFeedback')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PHONE_LOCATION_ON_ROBOT_DX').setCheck('Number')
        .appendField('phoneLocationOnRobot translation dx')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PHONE_LOCATION_ON_ROBOT_DY').setCheck('Number')
        .appendField('phoneLocationOnRobot translation dy')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PHONE_LOCATION_ON_ROBOT_DZ').setCheck('Number')
        .appendField('phoneLocationOnRobot translation dz')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PHONE_LOCATION_ON_ROBOT_X_ANGLE').setCheck('Number')
        .appendField('phoneLocationOnRobot rotation x')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PHONE_LOCATION_ON_ROBOT_Y_ANGLE').setCheck('Number')
        .appendField('phoneLocationOnRobot rotation y')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PHONE_LOCATION_ON_ROBOT_Z_ANGLE').setCheck('Number')
        .appendField('phoneLocationOnRobot rotation z')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('USE_COMPETITION_FIELD_TARGET_LOCATIONS').setCheck('Boolean')
        .appendField('useCompetitionFieldTargetLocations')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Initialize Vuforia for SKYSTONE.');
    this.getFtcJavaInputType = function(inputName) {
      switch (inputName) {
        case 'PHONE_LOCATION_ON_ROBOT_DX':
        case 'PHONE_LOCATION_ON_ROBOT_DY':
        case 'PHONE_LOCATION_ON_ROBOT_DZ':
        case 'PHONE_LOCATION_ON_ROBOT_X_ANGLE':
        case 'PHONE_LOCATION_ON_ROBOT_Y_ANGLE':
        case 'PHONE_LOCATION_ON_ROBOT_Z_ANGLE':
          return 'float';
      }
      return '';
    };
  }
};

Blockly.JavaScript['vuforiaSkyStone_initialize_withCameraDirection'] = function(block) {
  return vuforia_initialize_withCameraDirection_JavaScript(block, '""', vuforiaSkyStoneIdentifierForJavaScript);
};

Blockly.FtcJava['vuforiaSkyStone_initialize_withCameraDirection'] = function(block) {
  return vuforia_initialize_withCameraDirection_FtcJava(block, '""', 'VuforiaSkyStone');
};

Blockly.Blocks['vuforiaSkyStone_initialize_withWebcam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('VuforiaSKYSTONE'))
        .appendField('.')
        .appendField(createNonEditableField('initialize'));
    this.appendValueInput('CAMERA_NAME').setCheck(['CameraName', 'WebcamName', 'SwitchableCamera'])
        .appendField('cameraName')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('WEBCAM_CALIBRATION_FILE').setCheck('String')
        .appendField('Webcam Calibration Filename')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('USE_EXTENDED_TRACKING').setCheck('Boolean')
        .appendField('useExtendedTracking')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('ENABLE_CAMERA_MONITORING').setCheck('Boolean')
        .appendField('enableCameraMonitoring')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('CAMERA_MONITOR_FEEDBACK').setCheck('VuforiaLocalizer.Parameters.CameraMonitorFeedback')
        .appendField('cameraMonitorFeedback')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('CAMERA_LOCATION_ON_ROBOT_DX').setCheck('Number')
        .appendField('cameraLocationOnRobot translation dx')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('CAMERA_LOCATION_ON_ROBOT_DY').setCheck('Number')
        .appendField('cameraLocationOnRobot translation dy')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('CAMERA_LOCATION_ON_ROBOT_DZ').setCheck('Number')
        .appendField('cameraLocationOnRobot translation dz')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('CAMERA_LOCATION_ON_ROBOT_X_ANGLE').setCheck('Number')
        .appendField('cameraLocationOnRobot rotation x')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('CAMERA_LOCATION_ON_ROBOT_Y_ANGLE').setCheck('Number')
        .appendField('cameraLocationOnRobot rotation y')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('CAMERA_LOCATION_ON_ROBOT_Z_ANGLE').setCheck('Number')
        .appendField('cameraLocationOnRobot rotation z')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('USE_COMPETITION_FIELD_TARGET_LOCATIONS').setCheck('Boolean')
        .appendField('useCompetitionFieldTargetLocations')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Initialize Vuforia for SKYSTONE.');
    this.getFtcJavaInputType = function(inputName) {
      switch (inputName) {
        case 'CAMERA_LOCATION_ON_ROBOT_DX':
        case 'CAMERA_LOCATION_ON_ROBOT_DY':
        case 'CAMERA_LOCATION_ON_ROBOT_DZ':
        case 'CAMERA_LOCATION_ON_ROBOT_X_ANGLE':
        case 'CAMERA_LOCATION_ON_ROBOT_Y_ANGLE':
        case 'CAMERA_LOCATION_ON_ROBOT_Z_ANGLE':
          return 'float';
      }
      return '';
    };
  }
};

Blockly.JavaScript['vuforiaSkyStone_initialize_withWebcam'] = function(block) {
  return vuforia_initialize_withWebcam_JavaScript(block, '""', vuforiaSkyStoneIdentifierForJavaScript);
};

Blockly.FtcJava['vuforiaSkyStone_initialize_withWebcam'] = function(block) {
  return vuforia_initialize_withWebcam_FtcJava(block, 'VuforiaSkyStone');
};

Blockly.Blocks['vuforiaSkyStone_activate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('VuforiaSKYSTONE'))
        .appendField('.')
        .appendField(createNonEditableField('activate'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Activates all trackables, so that it is actively seeking their presence.');
  }
};

Blockly.JavaScript['vuforiaSkyStone_activate'] = function(block) {
  return vuforia_activate_JavaScript(block, vuforiaSkyStoneIdentifierForJavaScript);
};

Blockly.FtcJava['vuforiaSkyStone_activate'] = function(block) {
  return vuforia_activate_FtcJava(block, 'VuforiaSkyStone');
};

Blockly.Blocks['vuforiaSkyStone_deactivate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('VuforiaSKYSTONE'))
        .appendField('.')
        .appendField(createNonEditableField('deactivate'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Deactivates all trackables, causing it to no longer see their presence.');
  }
};

Blockly.JavaScript['vuforiaSkyStone_deactivate'] = function(block) {
  return vuforia_deactivate_JavaScript(block, vuforiaSkyStoneIdentifierForJavaScript);
};

Blockly.FtcJava['vuforiaSkyStone_deactivate'] = function(block) {
  return vuforia_deactivate_FtcJava(block, 'VuforiaSkyStone');
};

Blockly.Blocks['vuforiaSkyStone_setActiveCamera'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('VuforiaSKYSTONE'))
        .appendField('.')
        .appendField(createNonEditableField('setActiveCamera'));
    this.appendValueInput('CAMERA_NAME').setCheck(['CameraName', 'WebcamName'])
        .appendField('camera')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Switches the active camera. Does nothing if the camera specified in ' +
        'VuforiaSKYSTONE.initialize is not a switchable camera.');
  }
};

Blockly.JavaScript['vuforiaSkyStone_setActiveCamera'] = function(block) {
  return vuforia_setActiveCamera_JavaScript(block, vuforiaSkyStoneIdentifierForJavaScript);
};

Blockly.FtcJava['vuforiaSkyStone_setActiveCamera'] = function(block) {
  return vuforia_setActiveCamera_FtcJava(block, 'VuforiaSkyStone');
};

Blockly.Blocks['vuforiaSkyStone_track'] = {
  init: function() {
    this.setOutput(true, 'VuforiaBase.TrackingResults');
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('VuforiaSKYSTONE'))
        .appendField('.')
        .appendField(createNonEditableField('track'));
    this.appendValueInput('TRACKABLE_NAME').setCheck('String')
        .appendField('trackableName')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(functionColor);
    this.setTooltip('Returns the VuforiaTrackingResults of the trackable with the given name.');
  }
};

Blockly.JavaScript['vuforiaSkyStone_track'] = function(block) {
  return vuforia_track_JavaScript(block, vuforiaSkyStoneIdentifierForJavaScript);
};

Blockly.FtcJava['vuforiaSkyStone_track'] = function(block) {
  return vuforia_track_FtcJava(block, 'VuforiaSkyStone');
};

Blockly.Blocks['vuforiaSkyStone_trackPose'] = {
  init: function() {
    this.setOutput(true, 'VuforiaBase.TrackingResults');
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('VuforiaSKYSTONE'))
        .appendField('.')
        .appendField(createNonEditableField('trackPose'));
    this.appendValueInput('TRACKABLE_NAME').setCheck('String')
        .appendField('trackableName')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(functionColor);
    this.setTooltip('Returns the VuforiaTrackingResults of the pose of the trackable with the given name. ' +
        'The pose is the location of the trackable in the phone\'s coordinate system.');
  }
};

Blockly.JavaScript['vuforiaSkyStone_trackPose'] = function(block) {
  return vuforia_trackPose_JavaScript(block, vuforiaSkyStoneIdentifierForJavaScript);
};

Blockly.FtcJava['vuforiaSkyStone_trackPose'] = function(block) {
  return vuforia_trackPose_FtcJava(block, 'VuforiaSkyStone');
};

Blockly.Blocks['vuforiaSkyStone_typedEnum_trackableName'] = {
  init: function() {
    this.setOutput(true, 'String');
    this.appendDummyInput()
        .appendField(createNonEditableField('TrackableName'))
        .appendField('.')
        .appendField(createSkyStoneTrackableNameDropdown(), 'TRACKABLE_NAME');
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = SKY_STONE_TRACKABLE_NAME_TOOLTIPS;
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('TRACKABLE_NAME');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['vuforiaSkyStone_typedEnum_trackableName'] = function(block) {
  return vuforia_typedEnum_trackableName_JavaScript(block);
};

Blockly.FtcJava['vuforiaSkyStone_typedEnum_trackableName'] = function(block) {
  return vuforia_typedEnum_trackableName_FtcJava(block);
};

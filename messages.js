/**
 * Centralized message store for datasync-boilerplate
 * This file contains all user-facing messages including info, error, and warning messages.
 */

module.exports = {
  // Clean script messages
  clean: {
    deleted: (item) => `Deleted: ${item}`,
    notFound: (item) => `Item not found! Skipping: ${item}`,
  },

  // Index/Main application messages
  sync: {
    tokenFound: (checkpoint) => `Sync token found in the checkpoint file: ${JSON.stringify(checkpoint)}`,
    usingToken: (token) => `Using sync token: ${token}`,
    startSuccess: () => `Boilerplate: Data sync started successfully.`,
    error: (error) => `An error occurred: ${error}`,
  },

  // File operation messages
  file: {
    notExist: (filePath) => `File does not exist: ${filePath}`,
    readError: (errorMessage) => `An error occurred while reading the file: ${errorMessage}`,
  },

  // Plugin messages
  plugin: {
    itemLogger: {
      beforeSync: (action, uid, contentType) => 
        `Item logger - Before sync: ${action.toUpperCase()} operation on '${uid}' (content type: ${contentType})`,
      afterSync: (action, uid, contentType) => 
        `Item logger - After sync: ${action.toUpperCase()} operation on '${uid}' (content type: ${contentType})`,
    },
  },
};


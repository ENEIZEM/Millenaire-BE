package com.sample_mod.sample_package;

import java.util.HashMap;

import com.zhekasmirnov.horizon.runtime.logger.Logger;

class Boot {
    public static void boot(HashMap data) {
        Logger.debug("TEST_MOD", "Hello from Java");
    }  
}
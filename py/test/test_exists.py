# ProjectName SDK exists test

import pytest
from usercheck_sdk import UsercheckSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = UsercheckSDK.test(None, None)
        assert testsdk is not None

# Usercheck SDK utility: make_context

from projectname_sdk.core.context import UsercheckContext


def make_context_util(ctxmap, basectx):
    return UsercheckContext(ctxmap, basectx)
